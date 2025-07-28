const router = require('express').Router();

router.use('/', require('./swagger'));

router.get('/',(req, res)=> {
    
    res.send('Hello world');
});

router.use('/temples',require('./temples'));
router.use('/places',require('./places'));

module.exports = router 
