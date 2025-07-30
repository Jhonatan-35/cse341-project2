const express = require ('express');
const router = express.Router();

const templesController =  require('../controllers/temples');
const validation = require('../middleware/validate');
const {isAuthenticated } = require('../middleware/authenticate');

router.get('/',templesController.getAll);

router.get('/:id',templesController.getSingle);

router.post('/',isAuthenticated, validation.saveTemple, templesController.createTemple);

router.put('/:id', isAuthenticated, validation.saveTemple, templesController.updateTemple);

router.delete('/:id', isAuthenticated ,templesController.deleteTemple);

module.exports = router;