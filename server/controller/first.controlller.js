var{user}= require("../model/first.model")
var{Register,Logindata}=require("../model/second.model")
var {Receipient}=require("../model/third.model")
var { Receipient } = require('../model/third.model')


const path = require('path');
exports.Cform=async(req,res)=>{
    try{
        await user.create(req.body)
        res.json("success")
    }catch(error){
        console.log("error");
       
        
    }
}

// exports.Rform=async(req,res)=>{
//     try{
//         await Register.create(req.body)
//         res.json("success")
//     }catch(error){
//         console.log("error");
        
//     }
// }


exports.Rform=async(req,res)=>{
    try{
      const loginpara={
        email:req.body.email,
        password:req.body.password,
        userstatus:req.body.userstatus
      }
      const newlogin=await Logindata.create(loginpara)
      const registerpara={
        user:req.body.user,
        email:req.body.email,
        password:req.body.password,
        phone:req.body.phone,
        address:req.body.address,
        regid:newlogin._id
      }
      await Register.create(registerpara)
      res.json('success')
    }
    catch(error){
      console.log('error');
      
    }
  
  }
  
  exports.sessions=async(req,res)=>{
    try{
      let logins={
        email:req.body.email,
        password:req.body.password
      }
      const user= await Logindata.findOne({
        email:logins.email
      })
      if (user){
        if(user.password==logins.password){
          if(user.userstatus==0 || user.userstatus==1){
            req.session.user=user
            res.json({
              success:true,
              data:user
            })
          }
          else{
            console.log('invalid');
            
          }
        }else{
          console.log('invalid password');
          
        }
      }else{
        console.log('invalid user');
        
      }
    }catch(error){
      console.log(' login error');
      
    }
    }


  //   exports.Dform=async(req,res)=>{
  //     // try{
  //     //     await Receipient.create(req.body)
  //     //     res.json("success")
  //     // }catch(error){
  //     //     console.log("error");
         
          
  //     // }


  //     try {
  //       const { name, email ,number,age,gender,address,dates,amount,cases,recepient_id} = req.body;
    
  //       if (!req.files || !req.files.file) {
  //         return res.json('No file uploaded.' );
  //       }
    
  //       const imagefile = req.files.file;
        
        
  //       const imgpath = path.join('public', imagefile.name);
    
  //       imagefile.mv(imgpath, async () => {
         
    
  //         const newFile = {
  //           name,
  //           email,
  //           number,
  //           age,gender,address,dates,amount,cases,
  //           file: `/${imagefile.name}`,
  //           recepient_id,
            
  //         };
    
  //         try {
  //           await Receipient.create(newFile);
  //           res.json('File uploaded and data saved successfully.' );
  //         } catch (saveError) {
  //           console.error(saveError);
  //           res.json( 'Error while saving data to the database.' );
  //         }
  //       });
  //     } catch (error) {
  //       console.error(error);
  //       res.json( 'Internal server error.' );
  //     }
  // }




// exports.Dform = async (req, res) => {
//   try {
//     const { name, email, number, age, gender, address, dates, amount, cases, recepient_id } = req.body;

//     if (!req.files || !req.files.file) {
//       return res.status(400).json('No file uploaded.');
//     }

//     const imagefile = req.files.file;

//     // Use absolute path to save image in the public folder
//     const imgpath = path.join(__dirname, '../public', imagefile.name);

//     // Move the file to the public folder
//     imagefile.mv(imgpath, async (err) => {
//       if (err) {
//         console.error('Error moving the file:', err);
//         return res.status(500).json('File upload failed.');
//       }

//       // Create the new file entry
//       const newFile = {
//         name,
//         email,
//         number,
//         age,
//         gender,
//         address,
//         dates,
//         amount,
//         cases,
//         file: imagefile.name,  // Save only the file name
//         recepient_id,
//       };

//       try {
//         await Receipient.create(newFile);
//         res.json('File uploaded and data saved successfully.');
//       } catch (saveError) {
//         console.error('Error saving data:', saveError);
//         res.status(500).json('Error saving data to the database.');
//       }
//     });
//   } catch (error) {
//     console.error('Internal server error:', error);
//     res.status(500).json('Internal server error.');
//   }
// };

exports.Dform = async (req, res) => {
  try {
    const { name, email ,number,age,gender,address,dates,amount,cases,recepient_id,recevied_amount} = req.body;
    if (!req.files || !req.files.file) {
      return res.json('No file uploaded.' );
    }

    const imagefile = req.files.file;
    const imgpath = path.join('public', imagefile.name);

    imagefile.mv(imgpath, async () => {
     

      const newFile = {
        name,
        email,
        number,
        age,
        gender,
        address,
        dates,
        amount,
        cases,
        file:  `/${imagefile.name}`,  // Save only the file name
        recepient_id,
        recevied_amount
      };

      try {
        await Receipient.create(newFile);
        res.json('File uploaded and data saved successfully.' );
      } catch (saveError) {
        console.error(saveError);
        res.json( 'Error while saving data to the database.' );
      }
    });
  } catch (error) {
    console.error(error);
    res.json( 'Internal server error.' );
  }
};


exports.findAllEducation = async(req,res) =>{
  try{
    let data = await Receipient.find({approval:1});
    return res.statu(200).json(data)
  }catch(err){
    console.log(err);
    
  }

}