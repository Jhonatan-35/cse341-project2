const passport = require('passport');

const router = require('express').Router();

router.use('/', require('./swagger'));

router.get('/',(req, res)=> {
    
    res.send('Hello world');
});

router.use('/temples',require('./temples'));
router.use('/places',require('./places'));


router.get('/login', passport.authenticate('github'),(req, res) => {});

router.get('/logout', function(req, res , next) {
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');

});
});

module.exports = router ;
