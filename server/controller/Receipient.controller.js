var { Register, Logindata } = require("../model/receipient.model")
var { Receipient } = require('../model/third.model')
var { Dress } = require("../model/Dress.model")
var { Food } = require("../model/Food.model")
const path = require("path")
const { Orphange } = require("../model/orphanage.model")
exports.Authentication = async (req, res) => {
  try {
    const loginpara = {
      email: req.body.email,
      password: req.body.password,
      userstatus: req.body.userstatus
    }
    const newlogin = await Logindata.create(loginpara)

    const registerpara = {
      user: req.body.user,
      email: req.body.email,
      password: req.body.password,
      loginid: newlogin._id
    }
    await Register.create(registerpara)
    res.json('success')
  }
  catch (error) {
    console.log('error');

  }
}


exports.Recepientlogin = async (req, res) => {
  try {
    let logins = {
      email: req.body.email,
      password: req.body.password
    }
    const Receipient = await Logindata.findOne({
      email: logins.email
    })
    if (Receipient) {
      if (Receipient.password == logins.password) {
        if (Receipient.userstatus == 0 || Receipient.userstatus == 1) {
          req.session.Receipient = Receipient
          res.json({
            success: true,
            data: Receipient
          })
        }
        else {
          console.log('invalid');
        }
      } else {
        console.log('invalid password');
      }
    } else {
      console.log('invalid user');

    }
  } catch (error) {
    console.log(' login error');

  }
}

exports.FindAllSubmission = async (req, res) => {
  try {
    const { recepient } = req.body;
    let data = await Receipient.find({ recepient_id: recepient });
    res.json({
      message: "Fetched succefully",
      data: data
    })
  } catch (error) {

  }
}

exports.Dressform = async (req, res) => {
  try {
    const { name, email, number, age, size, address, dates, count, cases, recepient_id ,received_amount } = req.body;
    if (!req.files || !req.files.file) {
      return res.json('No file uploaded.');
    }

    const imagefile = req.files.file;
    const imgpath = path.join('public', imagefile.name);

    imagefile.mv(imgpath, async () => {


      const newFile = {
        name,
        email,
        number,
        age,
        size,
        address,
        dates,
        count,
        cases,
        file: `/${imagefile.name}`,  // Save only the file name
        recepient_id,
        received_amount
      };

      try {
        await Dress.create(newFile);
        res.json('File uploaded and data saved successfully.');
      } catch (saveError) {
        console.error(saveError);
        res.json('Error while saving data to the database.');
      }
    });
  } catch (error) {
    console.error(error);
    res.json('Internal server error.');
  }
};

exports.DressSubmission = async (req, res) => {
  try {
    const { recepient } = req.body;
    let data = await Dress.find({ recepient_id: recepient });
    res.json({
      message: "Fetched succefully",
      data: data
    })
  } catch (error) {

  }
}



exports.Foodform = async (req, res) => {
  try {
    const { name, email, number, address, dates, count, cases, recepient_id } = req.body;
    if (!req.files || !req.files.file) {
      return res.json('No file uploaded.');
    }

    const imagefile = req.files.file;
    const imgpath = path.join('public', imagefile.name);

    imagefile.mv(imgpath, async () => {


      const newFile = {
        name,
        email,
        number,

        address,
        dates,
        count,
        cases,
        file: `/${imagefile.name}`,  // Save only the file name
        recepient_id,
      };

      try {
        await Food.create(newFile);
        res.json('File uploaded and data saved successfully.');
      } catch (saveError) {
        console.error(saveError);
        res.json('Error while saving data to the database.');
      }
    });
  } catch (error) {
    console.error(error);
    res.json('Internal server error.');
  }
};

exports.FoodSubmission = async (req, res) => {
  try {
    const { recepient } = req.body;
    let data = await Food.find({ recepient_id: recepient });
    res.json({
      message: "Fetched succefully",
      data: data
    })
  } catch (error) {

  }
}



exports.Orphangeform = async (req, res) => {
  try {
    const { name, email, number, types, address, dates, count, cases, recepient_id } = req.body;
    if (!req.files || !req.files.file) {
      return res.json('No file uploaded.');
    }

    const imagefile = req.files.file;
    const imgpath = path.join('public', imagefile.name);

    imagefile.mv(imgpath, async () => {


      const newFile = {
        name,
        email,
        number,

        types,
        address,
        dates,
        count,
        cases,
        file: `/${imagefile.name}`,  // Save only the file name
        recepient_id,
      };

      try {
        await Orphange.create(newFile);
        res.json('File uploaded and data saved successfully.');
      } catch (saveError) {
        console.error(saveError);
        res.json('Error while saving data to the database.');
      }
    });
  } catch (error) {
    console.error(error);
    res.json('Internal server error.');
  }
};

exports.OrphanageSubmission = async (req, res) => {
  try {
    const { recepient } = req.body;
    let data = await Orphange.find({ recepient_id: recepient });
    res.json({
      message: "Fetched succefully",
      data: data
    })
  } catch (error) {

  }
}


exports.Educationdelete = async (req, res) => {
  try {
    var Id = req.body.id
    const result = await Receipient.findByIdAndDelete(Id)
    console.log(result);
    res.json("result")

  } catch (error) {
    console.log("error detected");

  }
}

exports.Dressdelete = async (req, res) => {
  try {
    var Id = req.body.id
    const result = await Dress.findByIdAndDelete(Id)
    console.log(result);
    res.json("result")

  } catch (error) {
    console.log("error detected");

  }
}

exports.Fooddelete = async (req, res) => {
  try {
    var Id = req.body.id
    const result = await Food.findByIdAndDelete(Id)
    console.log(result);
    res.json("result")

  } catch (error) {
    console.log("error detected");

  }
}

exports.orphanagedelete = async (req, res) => {
  try {
    var Id = req.body.id

    const result = await Orphange.findByIdAndDelete(Id)
    console.log(result);
    res.json("result")

  } catch (error) {
    console.log("error detected");

  }
}


// exports.edited=async(req,res)=>{
//   try{
//    let upid = req.body.id
//      let param = {
//          name: req.body.name,
//          email:req.body.email,
//          number:req.body.number,
//          age:req.body.age,
//          gender:req.body.gender,
//          address:req.body.address,
//          dates:req.body.dates,
//          amount:req.body.amount,
//          cases:req.body.cases,
//          file: req.files?.file.name
//      }
//      let newdata = ""
//      if (req.files?.file) {
//          newdata = {
//              name: param.name,
//              email:param.email,
//              number:param.number,
//              age:param.age,
//              gender:param.gender,
//              address:param.address,
//              dates:param.dates,
//              amount:param.date,
//              cases:param.cases,
//              file: param.file
//          }
//          const upload = req.files.file
//          upload.mv('public/' + param.file).then((img) => {
//              console.log(img);
//          })
//      }
//      else {
//          newdata = {
//              name: param.name,
//              email:req.body.email,
//              number:param.number,
//              age:param.age,
//              gender:param.gender,
//              address:param.address,
//              dates:param.dates,
//              amount:param.amount,
//              cases:param.cases,

//          }
//      }

//     const result=await Receipient.findByIdAndUpdate(upid,newdata)
//     console.log(result);

//   }

//  catch(error){
//    console.log(error);0 b

//  }
//  }

exports.updatedit = async (req, res) => {
  try {
    var Id = req.body.id
    const rel = await Receipient.findById(Id)
    console.log(rel);
    res.json(rel)

  }
  catch (error) {
    console.log('error detected');

  }
}




exports.edited = async (req, res) => {
  try {
    const upid = req.body.id;
    const param = {
      name: req.body.name,
      email: req.body.email,
      number: req.body.number,
      age: req.body.age,
      gender: req.body.gender,
      address: req.body.address,
      dates: req.body.dates,
      amount: req.body.amount,
      cases: req.body.cases,
      file: req.body.file
    };

    if (req.files && req.files.file) {
      const file = req.files.file;
      param.file = file.name;
      await file.mv(`public/${param.file}`);
    }

    const result = await Receipient.findByIdAndUpdate(upid, param, { new: true });
    if (result) {
      return res.status(200).json({ message: "Recipient updated successfully" });
    } else {
      return res.status(400).json({ message: "Update failed" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};



//food



exports.Foodupdatedit = async (req, res) => {
  try {
    var Id = req.body.id
    const rel = await Food.findById(Id)
    console.log(rel);
    res.json(rel)

  }
  catch (error) {
    console.log('error detected');

  }
}





exports.Recepientfoodedit = async (req, res) => {
  try {
    const upid = req.body.id;
    const param = {
      name: req.body.name,
      email: req.body.email,
      number: req.body.number,
      
      address: req.body.address,
      dates: req.body.dates,
      count: req.body.count,
      cases: req.body.cases,
      file: req.body.file
    };

    if (req.files && req.files.file) {
      const file = req.files.file;
      param.file = file.name;
      await file.mv(`public/${param.file}`);
    }

    const result = await Food.findByIdAndUpdate(upid, param, { new: true });
    if (result) {
      return res.status(200).json({ message: "Recipient updated successfully" });
    } else {
      return res.status(400).json({ message: "Update failed" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};


//dress



exports.Dressupdatedit = async (req, res) => {
  try {
    var Id = req.body.id
    const rel = await Dress.findById(Id)
    console.log(rel);
    res.json(rel)

  }
  catch (error) {
    console.log('error detected');

  }
}





exports.Recepientdressedit = async (req, res) => {
  try {
    const upid = req.body.id;
    const param = {
      name: req.body.name,
      email: req.body.email,
      number: req.body.number,
      age: req.body.age,
      size: req.body.size,
      address: req.body.address,
      dates: req.body.dates,
      count: req.body.count,
      cases: req.body.cases,
      file: req.body.file
    };

    if (req.files && req.files.file) {
      const file = req.files.file;
      param.file = file.name;
      await file.mv(`public/${param.file}`);
    }

    const result = await Dress.findByIdAndUpdate(upid, param, { new: true });
    if (result) {
      return res.status(200).json({ message: "Recipient updated successfully" });
    } else {
      return res.status(400).json({ message: "Update failed" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};


//orphange



exports.Orphanageupdatedit = async (req, res) => {
  try {
    var Id = req.body.id
    const rel = await Orphange.findById(Id)
    console.log(rel);
    res.json(rel)

  }
  catch (error) {
    console.log('error detected');

  }
}





exports.Recepientorphanageedit = async (req, res) => {
  try {
    const upid = req.body.id;
    const param = {
      name: req.body.name,
      email: req.body.email,
      number: req.body.number,
      
      types: req.body.types,
      address: req.body.address,
      dates: req.body.dates,
      count: req.body.count,
      cases: req.body.cases,
      file: req.body.file
    };

    if (req.files && req.files.file) {
      const file = req.files.file;
      param.file = file.name;
      await file.mv(`public/${param.file}`);
    }

    const result = await Orphange.findByIdAndUpdate(upid, param, { new: true });
    if (result) {
      return res.status(200).json({ message: "Recipient updated successfully" });
    } else {
      return res.status(400).json({ message: "Update failed" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};



exports.EductaionNotification = async (req, res) => {
  try {
    const { recepient } = req.body;
    let data = await Receipient.find({ recepient_id: recepient, approval: { $in: [0, 1] } });
    res.json({
      message: "Fetched succefully",
      data: data
    })
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error", error });
  }
}


exports.OrphanforUser = async (req, res) => {
  try {
    const { recepient } = req.body;
    let data = await Orphange.find({approval:1 });
    res.json({
      message: "Fetched succefully",
      data: data
    })
  } catch (error) {

  }
}


exports.DressNotification = async (req, res) => {
  try {
    const { recepient } = req.body;
    let data = await Dress.find({ recepient_id: recepient, approval: { $in: [0, 1] } });

    res.json({
      message: "Fetched succefully",
      data: data
    })
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error", error });
  }
}


exports.FoodNotification = async (req, res) => {
  try {
    const { recepient } = req.body;
    let data = await Food.find({ recepient_id: recepient, approval: { $in: [0, 1] } });

    res.json({
      message: "Fetched succefully",
      data: data
    })
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error", error });
  }
}


exports.OrphangeNotification = async (req, res) => {
  try {
    const { recepient } = req.body;
    let data = await Orphange.find({ recepient_id: recepient, approval: { $in: [0, 1] } });

    res.json({
      message: "Fetched succefully",
      data: data
    })
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error", error });
  }
}
