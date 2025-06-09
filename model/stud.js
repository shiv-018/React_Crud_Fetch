let mongoose = require('mongoose')

let stud = mongoose.Schema({
    name:String,
    email:String,
    password:String
})
let Stud = mongoose.model("students",stud)

module.exports = Stud;