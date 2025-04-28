const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    dob: { type: Date, required: true },
    contact: { type: Number, required: true },
    address: { type: String, required: true },

    userid: { type: mongoose.Schema.Types.ObjectId, ref: 'login'},
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

const user = mongoose.model('user', userSchema);

const loginSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true    
    },
    userstatus: {
        type: Number,
        required: true
    },
   
    createdAt: {
        type: Date,
        default: Date.now()
    },
    block: { type: Number },

});

const login = mongoose.model('login', loginSchema);

module.exports = {user ,login };
