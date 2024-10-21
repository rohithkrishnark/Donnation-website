let mongoose=require('mongoose')

var loginschema=mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    userstatus:{
        type:Number,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})
const Logindata=mongoose.model('Loginform',loginschema)

var userschema=mongoose.Schema({
    user:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    regid:{
        type:mongoose.Schema.Types.ObjectId,
        ref : 'Loginform',
        required:true
    },
    
    createdAt:{
        type:Date,
        default:Date.now()
    }
})
const Register=mongoose.model('Registerform',userschema)
module.exports={Register,Logindata}