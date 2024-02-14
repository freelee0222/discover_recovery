const mongoose = require('mongoose')
const { Schema } = mongoose

const activitySchema = new Schema(
    {
        name: String,
        location: String,
        date: String,
        time: String,
        description: String
    },
    { timestamps: true }
)

module.exports = mongoose.model("activity", activitySchema)