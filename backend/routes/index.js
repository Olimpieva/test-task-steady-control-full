const router = require('express').Router();

const NotFoundError = require('../errors/not-found-error');
const { errorMessages } = require('../utils/constants');

const { addCity, getAllCities } = require('../controllers/cities');
const {
  addCitizen,
  getAllCitizens,
  getCitizenById,
} = require('../controllers/citizens');

router.get('/', (req, res) => res.send('Ya pojiloi server'));

router.post('/citizens', addCitizen);
router.get('/citizens', getAllCitizens);
router.get('/citizens/:citizenId', getCitizenById);

router.post('/cities', addCity);
router.get('/cities', getAllCities);

router.all('*', (req, res, next) => next(new NotFoundError(errorMessages.pageNotFound)));

module.exports = router;
