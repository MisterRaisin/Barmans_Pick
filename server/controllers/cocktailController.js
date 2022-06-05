require('../models/database');
const Cocktail = require('../models/Cocktail');
const Ingredient = require('../models/Ingredient');
const cocktail_builds = require('../../public/js/cocktail_builds')
const sgMail = require('@sendgrid/mail');


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


exports.about = async(req, res) => {
  try {
      res.render('about', {});
  } catch (error) {
      res.status(500).send({message: error.message} || "ERROR OCCURED");
  }
}


exports.contact = async(req, res) => {
  try {
      res.render('contact', {email_sent: false});
  } catch (error) {
      res.status(500).send({message: error.message} || "ERROR OCCURED");
  }
}

exports.process_contact = async(req, res) => {
  user_message = req.body
  const msg = {
    to: process.env.RECIPIENT,
    from: process.env.SENDER,
    subject: user_message.subject,
    text: `Message from ${user_message.name}. Email: ${user_message.email}\n${user_message.message}`,
  }
  sgMail.send(msg).then(() => {
    res.render('contact', {email_sent: true});
  })
  .catch((error) => {
    res.send(`There was a problem with sending the email. Please try later to send this error message to me:\n '${error}'`)
  })
}

exports.search = async(req, res) => {
    try {

        let searchTerm = req.body.searchTerm;
       
        const cocktails = await Cocktail.find({"name": {$regex: searchTerm, $options: "i" }}).sort({name: 1});
        res.render('index', {cocktail_list: cocktails});
        
    } catch (error) {
        res.status(500).send({message: error.message} || "ERROR OCCURED");
    }
}


exports.detail = async(req, res) => {
  try {
      cocktail_name = req.params.cocktailName;

      var chosen_cocktail = await Cocktail.find({"name": cocktail_name});
      if (chosen_cocktail.length > 1) res.send("Found too many cocktails")
      if (chosen_cocktail.length === 0) res.send("No cocktail found matching this name")

      await chosen_cocktail[0].populate('ingredients.ingredient')
      res.render('detail', {cocktail: chosen_cocktail[0]});
  } catch (error) {
      res.status(500).send({message: error.message} || "ERROR OCCURED");
  }
}


exports.ingredients = async(req, res) => {
  try {
      const main_distillers = await Ingredient.find({type: 'main distiller'}).sort({name:1})
      const liqueur = await Ingredient.find({"type": "liquer"}).sort({name:1})
      const generic = await Ingredient.find({"type": "generic"}).sort({name:1})
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
          cocktail['missing_ingredients'] = []
          cocktail['missing_ingredients_count'] = 0
          
          cocktail.ingredients.forEach(function(ingredient, index2) {
            // If the ingredient is a 'special' ingredient then ignore it (those are just plain text)
            if (ingredient.amount === 0 || ingredient.ingredient.type === 'general') return;
     
            if (ingredient_list.indexOf(ingredient.ingredient.id) === -1){
              cocktail['missing_ingredients'].push(ingredient.ingredient.name)
              cocktail['missing_ingredients_count'] = cocktail['missing_ingredients_count'] + 1
            }
          });

          // Add the current cocktail to the fitting stirng of missing ingredients
          if (cocktail['missing_ingredients_count'] === 0) {
            res_0_missing = res_0_missing + `<a href="/${cocktail.name}" style="color:inherit;text-decoration: none;"><b><u>${cocktail.name}</u></b> - ${cocktail.overview} </a><br><br>`
          }
          else if (cocktail['missing_ingredients_count'] === 1) {
            res_1_missing = res_1_missing + `<a href="/${cocktail.name}" style="color:inherit;text-decoration: none;"><b><u>${cocktail.name}</u></b></a> - Missing only - <a href="https://www.google.com/search?q=${cocktail.missing_ingredients[0]}"><b>${cocktail.missing_ingredients[0]}</b></a><br><br>`
          }
          else if (cocktail['missing_ingredients_count'] === 2) {
            res_2_missing = res_2_missing + `<a href="/${cocktail.name}" style="color:inherit;text-decoration: none;"><b><u>${cocktail.name}</u></b></a> - Missing both - `
            for (var i = 0; i < cocktail.missing_ingredients.length; i++) {
              res_2_missing = res_2_missing + `<a href="https://www.google.com/search?q=${cocktail.missing_ingredients[i]}"><b>${cocktail.missing_ingredients[i]}</b></a> | `
            }
            res_2_missing = res_2_missing + `<br><br>` 
          }
        })
        // Format the response string
        if (res_0_missing != '') {
          response = response + `<h5><b><u>Cocktails which you can make:</u></b></h5><br>${res_0_missing}<br>`
        }
        if (res_1_missing != '') {
          response = response + `<h5><b><u>Cocktails which require you 1 more ingredient:</u></b></h5><br>${res_1_missing}<br>`
        }
        if (res_2_missing != '') {
          response = response + `<h5><b><u>Cocktails which require you 2 more ingredients:</u></b></h5><br>${res_2_missing}<br>`
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



// insertCocktailData(cocktail_builds.sazerac)

