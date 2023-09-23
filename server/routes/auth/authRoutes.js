const router = require('express').Router();

const {
    getAuthToken
} = require('../../controllers/authController.js');

router.route('/getAuthToken').get(getAuthToken);

module.exports = router;