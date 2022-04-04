const City = require('../models/city');

const BadRequestError = require('../errors/bad-request-error');
const { errorMessages } = require('../utils/constants');

module.exports.addCity = async (req, res, next) => {
  const { name, data } = req.body;

  try {
    const newCity = await City.create({ name, data });

    res.send(newCity);
  } catch (error) {
    let err = error;

    if (error.name === 'ValidationError') {
      err = new BadRequestError(errorMessages.invalidCreateCityData);
    }

    next(err);
  }
};

module.exports.getAllCities = async (req, res, next) => {
  try {
    const allCities = await City.find({});

    res.send(allCities);
  } catch (error) {
    next(error);
  }
};
