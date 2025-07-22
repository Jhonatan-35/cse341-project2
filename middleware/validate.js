const validator = require('../helpers/validate');

const saveTemple = (req, res, next) => {
  const validationRule = {
    templeName: 'required|string',
    country: 'required|string',
    dateDedication: 'required|dateDedication',
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

module.exports = {
  saveTemple
};