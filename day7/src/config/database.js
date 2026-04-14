const mongoose = require('mongoose')

function connectToDb(){
    mongoose.connect(proccess.env.MONGO_URI)
    .then(()=>{
        console.log("Database connected succesful")
    })
}
module.exports = connectToDb