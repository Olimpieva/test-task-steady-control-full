const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  data: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('city', citySchema);
