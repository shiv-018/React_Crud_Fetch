let express = require('express')

let router = express.Router()
let {  getAllStudents, getOne, createStudent, updateStudent, deleteStudent } = require('../controller/stud')

router.get("/",getAllStudents)
router.get("/:id", getOne)
router.post("/",createStudent)
router.patch("/:id",updateStudent)
router.delete("/:id",deleteStudent)

module.exports = router