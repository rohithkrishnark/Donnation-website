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
const Logindata=mongoose.model('ReceipientLogin',loginschema)

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
    loginid:{
        type:mongoose.Schema.Types.ObjectId,
        ref : 'ReceipientLogin',
        required:true
    },
    
    createdAt:{
        type:Date,
        default:Date.now()
    }
})
const Register=mongoose.model('ReceipientReg',userschema)
module.exports={Register,Logindata}