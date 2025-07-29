const validator = require('../helpers/validate');

const saveTemple = (req, res, next) => {
  const validationRule = {
    templeName: 'required|string',
    country: 'required|string',
    email: 'required|email',
    dateDedication: 'required|string',
    phone: 'string',
    
  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err
      });
    } else {
      next();
    }
  });
};

const savePlace = (req, res, next) => {
  const validationRule = {
    namePlace: 'required|string',
    altitude: 'required|string',
    email: 'required|email',
    phone: 'required|string',
    sport: 'string',
    
  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err
      });
    } else {
      next();
    }
  });
};


module.exports = {
  saveTemple ,
  savePlace
};