const { Schema, model } = require('mongoose');

const ReactionSchema = new Schema(
    {

    }
)

const Reaction = new model('Reaction', ReactionSchema);

module.exports = Reaction;