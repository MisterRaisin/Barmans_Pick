const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema({
    ingredient: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model('Ingredient', ingredientSchema);