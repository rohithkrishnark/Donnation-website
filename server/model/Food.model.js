let mongoose=require('mongoose')
var userschema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    number:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    
    
    count:{
        type:Number,
        required:true
    },
    dates:{
        type:String,
        required:true
    },
    cases:{
        type:String,
        required:true
    },
    file:{
        type:String,
        required:true
    },
    recepient_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'receipientlogins',
        required:true
    },
    approval:{
        type:Number,
        default:0,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})
const Food=mongoose.model('Foodform',userschema)
module.exports={Food}