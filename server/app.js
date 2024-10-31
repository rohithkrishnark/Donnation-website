const express=require('express')
const cors=require('cors')
const database=require('./configs/database')
const bodyparser=require('body-parser')
const fileupload=require('express-fileupload')
const session=require("express-session")
const app= express()
const path=require('path')
app.use(fileupload())


app.use(cors())
app.use(bodyparser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyparser.json())
app.use(express.static(path.join(__dirname, 'public')));


app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    
  }))

database()
var firstrouter= require("./router/Main.router")
var secondrouter=require("./router/Receipient.router")
var paymentrouter = require("./router/CommonPayment")
app.use('/main',firstrouter)
app.use('/recepient',secondrouter)
app.use('/transaction',paymentrouter)


const PORT = 4000







app.listen(PORT,()=>{
    console.log(`server is running on :http://localhost:${PORT}`);
    
})
