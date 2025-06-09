// require the model folder with file student
let Student = require('../model/stud');

// code for get all data
let getAllStudents = async (req, res) => {
  let data = await Student.find();
  res.json(data);

};

// code for get particular data
let getOne = async(req,res)=>{
  let id = req.params.id
  let data = await Student.find({_id:id})
  res.json(data)
}

// code for save data
let createStudent = async (req, res) => {

  let body = req.body
  let data = await Student.insertOne(body)
  res.json("data save");

};

// code for delete
let deleteStudent = async (req, res) => {
  let id = req.params.id
  let data = await Student.deleteOne({ _id: id });
  res.json("data deleted");
 // console.log(data)
};

// code for update
// 
let updateStudent = async (req, res) => {
    let id = req.params.id;
    // console.log(id)
    let body = req.body;
    
        let result = await Student.updateOne({ _id: id }, { $set: body });
        res.json("data updated"); // return actual update result
  
        console.log(updateStudent)
};



module.exports = {
  getAllStudents,
  getOne,
  createStudent,
  deleteStudent,
  updateStudent
}