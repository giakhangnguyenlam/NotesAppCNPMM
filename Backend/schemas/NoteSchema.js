const mongoose = require('mongoose'),
    Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');

var NoteSchema = new Schema({
    userId: {
        type: Schema.Types.Number,
        ref: 'UserSchema'
    },
    title: String,
    date: String,
    content: String,
    status: String
})

autoIncrement.initialize(mongoose.connection);
NoteSchema.plugin(autoIncrement.plugin, {model : 'NoteSchema', field: "_id"});

var NoteSchema = mongoose.model('NoteSchema', NoteSchema);

module.exports = NoteSchema;