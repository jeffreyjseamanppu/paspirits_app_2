const { Router } = require('express');
const controller = require('./controller');

const router = Router();
router.get ('/', controller.getAccounts);
router.get ('/:id', controller.getAccountsById);
router.post ('/', controller.addNewAccount);
router.put ('/:id', controller.updateAccount);


module.exports = router;