const Citizen = require('../models/citizen');
const City = require('../models/city');

const BadRequestError = require('../errors/bad-request-error');
const NotFoundError = require('../errors/not-found-error');
const { errorMessages } = require('../utils/constants');

module.exports.addCitizen = async (req, res, next) => {
  const {
    name,
    city,
    district,
    street,
  } = req.body;

  try {
    const cityFromShema = await City.findOne({ name: city.replace(' г.', '') });
    const newCitizen = await Citizen.create({
      name,
      city_id: cityFromShema._id,
      groups: [{
        type: 'city',
        name: city,
      }, {
        type: 'district',
        name: district,
      }, {
        type: 'street',
        name: street,
      }],
    });

    res.send(newCitizen);
  } catch (error) {
    let err = error;

    if (error.name === 'ValidationError') {
      err = new BadRequestError(errorMessages.invalidCreateCitizenData);
    }

    next(err);
  }
};

module.exports.getCitizenById = async (req, res, next) => {
  const { citizenId } = req.params;

  try {
    const userInfo = await Citizen.findById(citizenId)
      .orFail(() => new NotFoundError(errorMessages.citizenNotFound));

    res.send(userInfo);
  } catch (error) {
    next(error);
  }
};

module.exports.getAllCitizens = async (req, res, next) => {
  try {
    const allCitizens = await Citizen.find({});

    res.send(allCitizens);
  } catch (error) {
    next(error);
  }
};
