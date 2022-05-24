require('../models/database');
const Cocktail = require('../models/Cocktail');
const Ingredient = require('../models/Ingredient');


/**
 * GET /
 * Homepage
 */
exports.homepage = async(req, res) => {
    try {

        const cocktails = await Cocktail.find({});
        res.render('index', {cocktail_list: cocktails});
    } catch (error) {
        res.status(500).send({message: error.message} || "ERROR OCCURED");
    }

}

exports.search = async(req, res) => {
    try {

        let searchTerm = req.body.searchTerm;

        const cocktails = await Cocktail.find({$or:[ {"name": {$regex: searchTerm, $options: "i" }}, {ingredients: {$elemMatch: {ingredient: {$regex: searchTerm, $options: "i" }}}}]});
        res.render('index', {cocktail_list: cocktails});
    } catch (error) {
        res.status(500).send({message: error.message} || "ERROR OCCURED");
    }
}


exports.detail = async(req, res) => {
  try {
      cocktail_name = req.params.cocktailName;

      var chosen_cocktail = await Cocktail.find({"name": cocktail_name});
      res.render('detail', {cocktail: chosen_cocktail[0]});
  } catch (error) {
      res.status(500).send({message: error.message} || "ERROR OCCURED");
  }
}


exports.ingredients = async(req, res) => {
  try {
      res.render('ingredients', {});
  } catch (error) {
      res.status(500).send({message: error.message} || "ERROR OCCURED");
  }
}






async function insertCocktailData(new_cocktail) {
    try {
      getAndUpdateIngredientList(new_cocktail.ingredients)
      await Cocktail.insertMany(new_cocktail);
    } catch (error) {
        console.log('Error in inserting data: ', error.message);
    }
}

function getAndUpdateIngredientList(ingredient_list) {
  try {
    ingredient_list.forEach(ingredient_each => {
      console.log(ingredient_each)
      Ingredient.find({"ingredient": ingredient_each.ingredient}, (err, ingredient) => {
        if (ingredient.length) {
          //
        } else {
          const new_ingredient = new Ingredient({
            "ingredient" : ingredient_each.ingredient,
          })
          Ingredient.insertMany(new_ingredient)
          console.log("Inserted new ingredient: ", new_ingredient.ingredient)
        }
    })});
  } catch (error) {
      console.log('Error in inserting data', error.message);
  }
}

var cocktail = new Cocktail({ "name": "Alexander",
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
"preparation": "Shake and strain into a chilled cocktail glass." })

var cocktail2 = new Cocktail({ "name": "Aviation",
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
"preparation": "Shake and strain into a chilled cocktail glass." })

// insertCocktailData(cocktail2);