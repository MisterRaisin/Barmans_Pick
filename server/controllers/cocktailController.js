require('../models/database');
const { Query } = require('mongoose');
const Cocktail = require('../models/Cocktail');
const Ingredient = require('../models/Ingredient');


/**
 * GET /
 * Homepage
 */
exports.homepage = async(req, res) => {
    try {

        const cocktails = await Cocktail.find({}).sort({name: 1});
        res.render('index', {cocktail_list: cocktails});
    } catch (error) {
        res.status(500).send({message: error.message} || "ERROR OCCURED");
    }

}

exports.search = async(req, res) => {
    try {

        let searchTerm = req.body.searchTerm;

        const cocktails = await Cocktail.find({$or:[ {"name": {$regex: searchTerm, $options: "i" }}, {ingredients: {$elemMatch: {ingredient: {$regex: searchTerm, $options: "i" }}}}]}).sort({name: 1});
        res.render('index', {cocktail_list: cocktails});
    } catch (error) {
        res.status(500).send({message: error.message} || "ERROR OCCURED");
    }
}


exports.detail = async(req, res) => {
  try {
      cocktail_name = req.params.cocktailName;

      var chosen_cocktail = await Cocktail.find({"name": cocktail_name});
      await chosen_cocktail[0].populate('ingredients.ingredient')
      res.render('detail', {cocktail: chosen_cocktail[0]});
  } catch (error) {
      res.status(500).send({message: error.message} || "ERROR OCCURED");
  }
}


exports.ingredients = async(req, res) => {
  try {
      const main_distillers = await Ingredient.find({type: 'main distiller'})
      const liqueur = await Ingredient.find({"type": "liquer"})
      const generic = await Ingredient.find({"type": "generic"})
      res.render('ingredients', {main_distillers : main_distillers, liqueur: liqueur, generic: generic});
  } catch (error) {
      res.status(500).send({message: error.message} || "ERROR OCCURED");
  }
}


exports.getcocktails = async(req, res) => {
  try {
    let response = ""
    let ingredient_list = req.body.query;
    
    if (ingredient_list.length > 0) {
      // const cocktails = await Cocktail.find({"ingredients.ingredient": {$in : ingredient_list }})
      await Cocktail.find({"ingredients.ingredient": {$in : ingredient_list }}).populate('ingredients.ingredient').exec(function (err, cocktails) {
        // If no cocktails match the ingredients send an appropriate response
        if (cocktails.length === 0) {
          response = '<b>No Cocktails Fitting these Ingredients</b>'
          res.send({response: response})
          return
        }

        res_0_missing = ''
        res_1_missing = ''
        res_2_missing = ''
        
        cocktails.forEach(function(cocktail, index1) {
          // cocktail.populate('ingredients.ingredient')
          cocktail['missing_ingredients'] = ''
          cocktail['missing_ingredients_count'] = 0
          
          cocktail.ingredients.forEach(function(ingredient, index2) {
            // If the ingredient is a 'special' ingredient then ignore it (those are just plain text)
            if (ingredient.amount === 0 || ingredient.ingredient.type === 'general') return;
     
            if (ingredient_list.indexOf(ingredient.ingredient.id) === -1){
              cocktail['missing_ingredients'] = cocktail['missing_ingredients'] + ingredient.ingredient.name + " | "
              cocktail['missing_ingredients_count'] = cocktail['missing_ingredients_count'] + 1
            }
          });

          // Add the current cocktail to the fitting stirng of missing ingredients
          if (cocktail['missing_ingredients_count'] === 0) {
            res_0_missing = res_0_missing + `<a href="/${cocktail.name}" style="color:inherit;text-decoration: none;"><b><u>${cocktail.name}</u></b> - ${cocktail.overview} </a><br><br>`
          }
          else if (cocktail['missing_ingredients_count'] === 1) {
            res_1_missing = res_1_missing + `<a href="/${cocktail.name}" style="color:inherit;text-decoration: none;"><b><u>${cocktail.name}</u></b> - Missing only - ${cocktail.missing_ingredients}</a><br><br>`
          }
          else if (cocktail['missing_ingredients_count'] === 2) {
            res_2_missing = res_2_missing + `<a href="/${cocktail.name}" style="color:inherit;text-decoration: none;"><b><u>${cocktail.name}</u></b> - Missing both - ${cocktail.missing_ingredients}</a><br><br>`
          }
        })
        // Format the response string
        if (res_0_missing != '') {
          response = response + `<b><u>Cocktails which you can make:</u></b><br><br>${res_0_missing}<br>`
        }
        if (res_1_missing != '') {
          response = response + `<b><u>Cocktails which require you to get only 1 more ingredient:</u></b><br><br>${res_1_missing}<br>`
        }
        if (res_2_missing != '') {
          response = response + `<b><u>Cocktails which require you to 2 more ingredient:</u></b><br><br>${res_2_missing}<br>`
        }
        res.send({response: response})
    });
    } 
    // Response if the user didnt select any ingredients / unlselected all ingredients
    else {
      response = ''
      res.send({response: response})
    }
    
  } catch (error) {
      res.status(500).send({message: error.message} || "ERROR OCCURED");
  }
} 






async function insertCocktailData(new_cocktail) {
    try {
      await getAndUpdateIngredientList(new_cocktail)
          
      await Cocktail.insertMany(new_cocktail)
      
      // await Cocktail.findOne({'name':new_cocktail.name}).populate('ingredients.ingredient')
      // new_cocktail.populate('ingredients.ingredient')
    } catch (error) {
        console.log('Error in inserting data: ', error.message);
    }
}


function getAndUpdateIngredientList(cocktail) {

  return new Promise((resolve) => {
    ingredient_list = cocktail.ingredients

    // Loop through all the ingredients in the ingredient list
    ingredient_list.forEach(function(ingredient, index) {
      // Check if ingredient already exists in db
      Ingredient.find({"name": ingredient.ingredient}, (err, found_ingredient) => {
        // if yes, link the current ingredient to the current position
        if (found_ingredient.length) {
          ingredient.ingredient = found_ingredient[0]
          console.log("Found old ingredient: ", ingredient.ingredient.name)
        } 
        // if not, create a ingredient and then link it to the current ingredient
        else {
          // Check if the ingredient is a special ingredient (which is just plain text)
          if (ingredient.amount != 0) {
            // Create a new ingredient
            const new_ingredient = new Ingredient({
              "name" : ingredient.ingredient,
            })
            // Insert new ingredient to ingredient db
            Ingredient.insertMany(new_ingredient)
            console.log("Inserted new ingredient: ", new_ingredient.name)
            // Link the new ingredient to the cocktail
            ingredient.ingredient = new_ingredient
          }
        }

      console.log("Index: " + index)
      if (index === ingredient_list.length - 1) resolve(cocktail);
      })
    })
  })
}

var alexander = { "name": "Alexander",
"overview": "A great after-dinner classic. Rich feeling of cream and subtle chocolaty.",
"glass": {"name":"martini", "chilled":true},
"ingredients": [
  {
    "amount": 30,
    "ingredient": "Cognac" },
  {
    "amount": 30,
    "ingredient": "Cacao Créme liqueur" },
  {
    "amount": 30,
    "ingredient": "Cream" }
],
"garnish" : "Sprinkle with fresh ground nutmeg.",
"img": "alexander_img.jpg",
"preparation": "Shake and strain into a chilled cocktail glass." }

var aviation = { "name": "Aviation",
"overview": "AHHHHHHHHHHHHHH",
"glass": {"name":"martini", "chilled":true},
"ingredients": [
  { "unit": "ml",
    "amount": 45,
    "ingredient": "Gin" },
  { "unit": "ml",
    "amount": 15,
    "ingredient": "Cherry liqueur"},
  { "unit": "ml",
    "amount": 15,
    "ingredient": "Lemon juice" }
],
"garnish": "None",
"img": "aviation_img.jpg",
"preparation": "Shake and strain into a chilled cocktail glass." }

var angel_face = { "name": "Angel Face",
"overview": "A good all-day cocktail mainly based on gin.",
"glass": {"name":"martini", "chilled":true},
"ingredients": [
  {
    "amount": 30,
    "ingredient": "Gin" },
  {
    "amount": 30,
    "ingredient": "Apricot brandy" },
  {
    "amount": 30,
    "ingredient": "Calvados" }
],
"img": "angel_face_img.jpg",
"preparation": "Shake with ice cubes. Strain into a cocktail glass." }

var martini = { "name": "Martini",
"overview": "A dry and bitter cocktail. One of the Classics!",
"glass": {"name":"martini", "chilled":true},
"ingredients": [
  {
    "amount": 90,
    "ingredient": "Gin" },
  {
    "amount": 15,
    "ingredient": "Vermouth extra dry" }
],
"garnish": "olives/lemon peel",
"img": "martini_img.jpg",
"preparation": "Can be shaken or stirred. Strain into a cocktail glass." }

var dirty_martini = { "name": "Dirty Martini",
"overview": "A dry bitter cocktail. But with a punch of sourness.",
"glass": {"name":"martini", "chilled":true},
"ingredients": [
  {
    "amount": 90,
    "ingredient": "Gin" },
  {
    "amount": 10,
    "ingredient": "Vermouth extra dry" },
    {
      "amount": 10,
      "ingredient": "Olive juice" }
],
"garnish": "olives",
"img": "dirty_martini_img.jpg",
"preparation": "Can be shaken or stirred. Strain into a cocktail glass." }

var old_fashioned = { "name": "Old Fashioned",
"overview": "The oldest cocktail. Has a dry taste and great to have before a meal.",
"glass": {"name":"low-ball", "chilled":true},
"ingredients": [
  {
    "amount": 60,
    "ingredient": "Whiskey" },
  {
    "amount": 15,
    "ingredient": "Sugar Water" },
    {
      "amount": 0,
      "label": "3-4 dashes of Angostura Bitters" }
],
"garnish": "cherry/orange peel",
"img": "old_fashioned_img.jpg",
"preparation": "Stirred in a stirring glass, then strained to a low-ball and served with ice." }

var manhatten = { "name": "Manhattan",
"overview": "A great before-dinner cocktail. One of the Classics.",
"glass": {"name":"martini", "chilled":true},
"ingredients": [
  {
    "amount": 60,
    "ingredient": "Whiskey",
    "label": "Rye " },
  {
    "amount": 30,
    "ingredient": "Vermouth Rosso" },
    {
      "amount": 0,
      "label": "2 dashes of Angostura Bitters" }
],
"garnish": "orange peel",
"img": "manhatten_img.jpg",
"preparation": "Stirred in a stirring glass, then strained to a cocktail glass." }

var robroy = { "name": "Rob Roy",
"overview": "A great before-dinner cocktail. One of the Classics.",
"glass": {"name":"martini", "chilled":true},
"ingredients": [
  {
    "amount": 60,
    "ingredient": "Whiskey",
    "label": "Scotch " },
  {
    "amount": 30,
    "ingredient": "Vermouth Rosso" },
    {
      "amount": 0,
      "label": "2 dashes of Angostura Bitters" }
],
"garnish": "orange peel",
"img": "robroy_img.jpg",
"preparation": "Stirred in a stirring glass, then strained to a cocktail glass." }


// insertCocktailData(robroy)
