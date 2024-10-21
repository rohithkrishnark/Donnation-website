var mongoose=require('mongoose')
function datas(){
mongoose.connect('mongodb://localhost:27017/mongoose').then((result)=>{
    console.log('connected');
    
}).catch((error)=>{
    console.log('error detected');
    

})
}
module.exports=datas