const router = require('express').Router();
const controller = require('./controller');


router.post('/', controller.register);



module.exports = router;