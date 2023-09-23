const router = require('express').Router();
const {
    getAuthToken
} = require('../../controllers/authController');

router.route('/getAuthToken').post(getAuthToken);

module.exports = router;