const ALLOWED_CORS = [
  'http://localhost:3000',
  'localhost:3000',
];

const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';

const errorMessages = {
  serverError: 'Internal server error',
  invalidCreateCityData: 'Incorrect transmitted city data',
  invalidCreateCitizenData: 'Incorrect transmitted citizen data',
  citizenNotFound: 'A citizen with the specified id was not found',
  pageNotFound: 'Page not found',
};

module.exports = {
  ALLOWED_CORS,
  DEFAULT_ALLOWED_METHODS,
  errorMessages,
};
