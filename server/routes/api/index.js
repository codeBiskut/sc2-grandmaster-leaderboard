const router = require('express').Router();
const leaderboardRoutes = require('./leaderboardRoutes');

router.use('/leaderboard', leaderboardRoutes);

module.exports = router;