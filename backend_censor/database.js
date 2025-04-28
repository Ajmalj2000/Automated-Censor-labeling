const mongoose = require('mongoose')

function connectToDB(){
    mongoose.connect('mongodb://localhost:27017/censorLabelling')
    .then(()=>console.log("mongoose connected"))
    .catch((err)=>console.log(err))
}
module.exports=connectToDB