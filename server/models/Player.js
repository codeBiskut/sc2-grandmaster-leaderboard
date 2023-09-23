const { Schema, model, Types} = require('mongoose');

const playerSchema = new Schema(
    {
        playerId: Number,
        realm: Number,
        region: Number,
        displayName:String,
        clanTag:String,
        favoriteRace:String,
        previousRank:Number,
        points:Number,
        wins:Number,
        losses:Number,
        mmr:Number,
        joinTimestamp:Number
    }
);

const Player = model('Player', playerSchema);

module.exports = Player;