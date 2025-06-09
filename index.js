let express = require('express')
let app = express()
require('./dbconnect.js')
let cors = require('cors')
let studRouter = require('./routes/stud.js')


app.use(cors())
app.use(express.json())
app.use('/',studRouter)

app.listen(2001,()=>{
    console.log("server start")
})