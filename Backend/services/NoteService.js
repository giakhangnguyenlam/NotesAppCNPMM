const Note = require('../schemas/NoteSchema');

var createNote = (req, res) => {
    let note =  new Note(req.body);
    note.save((err, result) => {
        if(err) return res.json({mess: err})
        return res.json(result);
    }) 
}

var updateNode = (req, res) => {
    Note.findOne({_id: req.params.id}, (err, note) => {
        if(err) return res.json({mess: err});
        note.title = req.body.title;
        note.date = req.body.date;
        note.content = req.body.content;
        note.status = req.body.status;
        note.save((err, result) => {
            if(err) return res.json({mess: err})
            return res.json(result);
        })
    })
}

var getNotesByUserId = (req, res) => {
    Note.find({$and : [{userId: req.params.id}, {status: 'unfinished'}]}, (err, result) => {
        if(err) return res.json({mess: err});
        return res.json(result);
    })
}

var updateStatusNote = (req, res) => {
    Note.findOne({_id: req.params.id}, (err, note) => {
        if(err) return res.json({mess: err});
        note.status = 'finished';
        note.save((err, result) => {
            if(err) return res.json({mess: err})
            return res.json(result)
        })
    })
}

var getStatusFinishedNote = (req, res) => {
    Note.find({$and : [{userId: req.params.id}, {status: 'finished'}]}, (err, result) => {
        if(err) return res.json({mess: err});
        return res.json(result);
    })
}

var deleteNote = (req, res) => {
    Note.deleteOne({_id: req.params.id}, (err) => {
        if(err) return res.json({mess: err});
        return res.json({mess: 'Delete successfully'});
    })
}

module.exports = {
    createNote,
    deleteNote,
    updateNode,
    getStatusFinishedNote,
    updateStatusNote,
    getNotesByUserId
}