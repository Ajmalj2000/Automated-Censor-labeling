const mongoose = require('mongoose');



const videoSchema=mongoose.Schema({
    email: { type: String, required: true },
    category: { type: String, required: true },
    video: { type: String, required: true },
    userid: { type: mongoose.Schema.Types.ObjectId, ref: 'login'},
})
const video = mongoose.model('videos', videoSchema)


const feedbackSchema=mongoose.Schema({

    title: { type: String, required: true },
    description: { type: String, required: true },
    email: { type: String, required: true },
    userid: { type: mongoose.Schema.Types.ObjectId, ref: 'login'},
})
const feedback = mongoose.model('feedback', feedbackSchema)


module.exports = { video, feedback}