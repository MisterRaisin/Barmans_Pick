const mongoose = require('mongoose');
const Ingredient = require('./Ingredient')

const cocktailSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    overview: {
        type: String,
        required: true
    },
    glass: {
        name: {type: String, required: true},
        chilled: {
            type: Boolean,
            default: false
        },
    },
    ingredients: [{
        ingredient: { type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient' },
        amount: Number,
        label: {
            type: String,
            default: ""
        }
    }],
    preparation: {
        type: String,
        required: true
    },
    garnish: {
        type: String,
        default: 'None'
    },
    img: {
        type: String,
        required: true
    }
});

cocktailSchema.index({name: 'text'});

module.exports = mongoose.model('Cocktail', cocktailSchema);