const router = require('express').Router();


router.get('', function(req, res){
    res.render('index', {title:'index'})
})


router.get('/register', function(req, res){
    res.render('register', {title:'register'})
})

router.get('/register/*', function(req, res){
    res.render('notfound', {path:'register'})
})

router.get('*', function(req, res){
    res.render('notfound',  {path:'base'})
})

module.exports = router;
