const router = require('express').Router();
const controller = require('./controller');

router.get('/', controller.getUsers);
router.get('/:id', controller.getOneUser);
router.get('/:id/accounts')

router.post('/', controller.register);
router.post('/:id/accounts', controller.createAccount);


router.put('/:id/accounts/:accountNumber/balance', controller.updateBalance)



module.exports = router;