const mongoose = require("mongoose");

require("dotenv").config();
require("../../database/main_db");
require("../../models/AddTeacher");

const teacherModel = mongoose.model("AddTeacherInfo");

const createOne = async (req, res) => {
  const { teacherId, name, course, department, year, semester} = req.body;

  if (!teacherId || !name || !course || !department || !year || !semester) {
    return res.status(400).send("please the whole input field!");
  }

  const teacher = await teacherModel.findOne({ teacherId });
  if (teacher) {
    return res.status(406).send("Teacher id must be unique!");
  }

  const password = '1234';

  // hexadecimal
  // const hash = bcrypt

  try {
    const newTeacher = await teacherModel.create({
      password,
      teacherId,
      name,
      course,
      department,
      year,
      semester,
    });
    return res.status(201).send(newTeacher);
  } catch (err) {
    return res.status(500).send(err);
  }
};

const findAll = async (req, res) => {
  try {
    const allTeacher = await teacherModel.find({});
    return res.status(200).send(allTeacher);
  } catch (err) {
    return res.status(500).send(err);
  }
};

const deleteById = async (req, res) => {
  const { id } = req.params;
  const deletedTeacher = await teacherModel.deleteOne({ _id: id });
  if (!deletedTeacher) {
      return res.status(404).send({ message: "Teacher id not found" });
  }
  return res.status(200).send({ message: "Teacher with the given id has been deleted successfully" });
}

module.exports = { createOne, findAll, deleteById };
