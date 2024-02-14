const Activity = require('../models/activity-model')

module.exports = {
    createActivity(req, res) {
        const { body } = req
        Activity.create(body)
            .then(activity => res.json(activity))
            .catch(err => res.status(500).json(err))
    },
    readActivities(req, res) {
        Activity.find().sort({ date:1 })
        .then(activity => res.json(activity))
        .catch(err => res.status(500).json(err))
    },
    updateActivity(req,res) {
        const { body } = req
        const { id } = req.params
        Activity.findByIdAndUpdate(id, body, { new: true })
          .then(activity => res.json(activity))
          .catch(err => res.status(500).json(err))
    },
    deleteActivity(req,res) {
        const { id } = req.params
        Activity.findByIdAndDelete(id)
        .then(activity => res.json(activity))
        .catch(err => res.status(500).json(err))
    }
}