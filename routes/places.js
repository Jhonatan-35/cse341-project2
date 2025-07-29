const express = require ('express');
const router = express.Router();

const placesController =  require('../controllers/places');
const validation = require('../middleware/validate');

router.get('/',placesController.getAll);

router.get('/:id',placesController.getSingle);

router.post('/', validation.savePlace, placesController.createPlace);

router.put('/:id', validation.savePlace, placesController.updatePlace);

router.delete('/:id', placesController.deletePlace);

module.exports = router;