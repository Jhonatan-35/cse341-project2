const express = require ('express');
const router = express.Router();

const templesController =  require('../controllers/temples');

router.get('/',templesController.getAll);

router.get('/:id',templesController.getSingle);

router.post('/',templesController.createTemple);

router.put('/:id',templesController.updateTemple);

router.delete('/:id',templesController.deleteTemple);


module.exports = router;