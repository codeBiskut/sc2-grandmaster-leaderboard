const router = require('express').Router();

const {
    displayLeaderboard, getGrandmasterLeaderboard
} = require('../../controllers/leaderboardController.js');

router.route('/getGrandmasterLeaderboard').get(getGrandmasterLeaderboard);
router.route('/displayLeaderboard').get(displayLeaderboard);

module.exports = router;