const express = require ('express');
const router = express.Router();

const templesController =  require('../controllers/temples');

router.get('/',templesController.getAll);

router.get('/:id',templesController.getSingle);


module.exports = router;