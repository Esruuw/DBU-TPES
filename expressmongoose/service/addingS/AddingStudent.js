const mongoose = require("mongoose");

require("dotenv").config();
require("../../database/sims_db");
require("../../models/AddStudent");

const studentModel = mongoose.model("AddStudentInfo");

const createOne = async (req, res) => {
  const { dbuId, name, email, department, year, semester} = req.body;

  if (!dbuId || !name || !email || !department || !year || !semester) {
    return res.status(400).send("please the whole input field!");
  }

  const student = await studentModel.findOne({ dbuId });
  if (student) {
    return res.status(406).send("student id must be unique!");
  }



  try {
    const newStudent = await teacherModel.create({
    //   password,
      dbuId,
      name,
      email,
      department,
      year,
      semester,
    });
    return res.status(201).send(newStudent);
  } catch (err) {
    return res.status(500).send(err);
  }
};

const findAll = async (req, res) => {
  try {
    const allStudent = await studentModel.find({});
    return res.status(200).send(allStudent);
  } catch (err) {
    return res.status(500).send(err);
  }
};

// const deleteById = async (req, res) => {
//   const { id } = req.params;
//   const deletedTeacher = await teacherModel.deleteOne({ _id: id });
//   if (!deletedTeacher) {
//       return res.status(404).send({ message: "Teacher id not found" });
//   }
//   return res.status(200).send({ message: "Teacher with the given id has been deleted successfully" });
// }

module.exports = { createOne, findAll };
