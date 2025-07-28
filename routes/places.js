const express = require ('express');
const router = express.Router();

const placesController =  require('../controllers/places');

router.get('/',placesController.getAll);

router.get('/:id',placesController.getSingle);

router.post('/',placesController.createPlace);

router.put('/:id',placesController.updatePlace);

router.delete('/:id',placesController.deletePlace);


module.exports = router;