const router = require('express').Router();

router.use('/cards', require('../resources/cards/routes'));
router.use('/accounts', require('../resources/cards/routes'));
router.use('/users', require('../resources/users/routes'));
router.use('/pages', require('../resources/pages/page.routes'));



module.exports = router;