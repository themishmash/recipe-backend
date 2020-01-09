const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  peepname: { type: String, required: true},
    title: { type: String, required: true},
    url: { type: String, required: true},
    date: { type: Date, required: true},
}, {
  timestamps: true,
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;