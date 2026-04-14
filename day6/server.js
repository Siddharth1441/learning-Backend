/*
  server ko start krna 
  database se connect krna
*/  
const app = require("./src/app");
const mongoose = require('mongoose')
const dns = require('dns')

dns.setServers([
    '1.1.1.1',
    '8.8.8.8'
])
function connectToDb(){
    mongoose.connect("mongodb+srv://siddharthv1441_db_user:ZNQoGKMjchDtJVGG@c1.tyrcz87.mongodb.net/day5")
    .then(()=>{
        console.log("Connected to Database")
    })
}

connectToDb()


app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})