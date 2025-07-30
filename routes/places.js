const express = require ('express');
const router = express.Router();

const placesController =  require('../controllers/places');
const validation = require('../middleware/validate');
const {isAuthenticated }= require('../middleware/authenticate');

router.get('/',placesController.getAll);

router.get('/:id',placesController.getSingle);

router.post('/', isAuthenticated , validation.savePlace, placesController.createPlace);

router.put('/:id',isAuthenticated ,validation.savePlace, placesController.updatePlace);

router.delete('/:id',isAuthenticated, placesController.deletePlace);

module.exports = router;