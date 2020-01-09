const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const peepSchema = new Schema({
  peepname: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
}, {
  timestamps: true,
});

const Peep = mongoose.model('peep', peepSchema);

module.exports = Peep;