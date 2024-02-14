const Meeting = require('../models/meeting-model')

module.exports = {
    createMeeting(req, res) {
        const { body } = req
        Meeting.create(body)
            .then(meeting => res.json(meeting))
            .catch(err => res.status(500).json(err))
    },
    readMeetings(req, res) {
        Meeting.find().sort({time: 1})
        .then(meetings => res.json(meetings))
        .catch(err => res.status(500).json(err))
    },
    updateMeeting(req,res) {
        const { body } = req
        const { id } = req.params
        Meeting.findByIdAndUpdate(id, body, { new: true })
          .then(meeting => res.json(meeting))
          .catch(err => res.status(500).json(err))
    },
    deleteMeeting(req, res) {
        const { id } = req.params
        Meeting.findByIdAndDelete(id)
        .then(meeting => res.json(meeting))
        .catch(err => res.status(500).json(err))
    }
}