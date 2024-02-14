const mongoose = require('mongoose')
const { Schema } = mongoose

const meetingSchema = new Schema(
    {
        name: String,
        type: String,
        location: String,
        members: Number,
        days: [String],
        time: String,
        description: String,
    }
)

module.exports = mongoose.model("meeting", meetingSchema)