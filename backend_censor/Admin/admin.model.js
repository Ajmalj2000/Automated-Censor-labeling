const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    qualification: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    },
    deadline: {
        type: String,
        required: true
    },
    contact: { 
        type: String,
        required: true
    },
    
}, { timestamps: true });  

const Job=mongoose.model('Job', jobSchema);

module.exports = {Job}
