const router = require('express').Router();


router.get('/index', function(req, res){
    res.render('index', {title:'Hey', message: 'Hello world'})
})


router.get('/register', function(req, res){
    res.render('register', {title:'Hey', message: 'Hello world'})
})

module.exports = router;
