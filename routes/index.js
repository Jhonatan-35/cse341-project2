const router = require('express').Router();



router.get('/',(req, res)=> {
    
    res.send('Hello world');
});

router.use('/temples',require('./temples'));

module.exports = router 
