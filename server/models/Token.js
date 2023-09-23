const { Schema, model, Types} = require('mongoose');

const tokenSchema = new Schema(
    {
        access_token: String,
    }
)

const Token = model('Token', tokenSchema);

module.exports = Token;