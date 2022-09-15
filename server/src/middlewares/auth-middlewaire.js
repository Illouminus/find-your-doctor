const ApiError = require('../exceptions/api-error');
const tokenService = require('../service/token-service');

module.exports = function (req, res, next) {
  console.log('!!!!!!!!', req.headers);
  try {
    const autorizationHeadear = req.headers.authorization;
    if (!autorizationHeadear) {
      console.log('=============>>DFKTHF§?');
      return next(ApiError.UnathorizedError());
    }
    const accessToken = autorizationHeadear.split(' ')[1];
    console.log(accessToken);
    if (!accessToken) {
      console.log('=============>>§§§?');
      return next(ApiError.UnathorizedError());
    }

    const userData = tokenService.validateAccesToken(accessToken);
    if (!userData) {
      console.log('=============>>????');
      return next(ApiError.UnathorizedError());
    }

    req.user = userData;
    next();
  } catch (error) {
    console.log('Зашли в CATCH');
    return next(ApiError.UnathorizedError());
  }
};
