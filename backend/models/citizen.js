const mongoose = require('mongoose');

const groupShema = new mongoose.Schema({
  _id: false,
  type: {
    type: String,
    enum: ['city', 'district', 'street'],
  },
  name: {
    type: String,
    required: true,
  },
});

const citizenSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  city_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'city',
    required: true,
  },
  groups: [groupShema, groupShema, groupShema],
});

module.exports = mongoose.model('citizen', citizenSchema);
