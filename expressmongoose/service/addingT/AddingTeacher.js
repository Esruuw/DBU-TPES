const mongoose = require("mongoose");

require("dotenv").config();
require("../../database/main_db");
require("../../models/AddTeacher");

const teacherModel = mongoose.model("AddTeacherInfo");

const createOne = async (req, res) => {
  const { teacherId, name, course, department, year, semester } = req.body;

  if (!teacherId || !name || !course || !department || !year || !semester) {
    return res.status(400).send("please the whole input field!");
  }

  const teacher = await teacherModel.findOne({ teacherId });
  if (teacher) {
    return res.status(406).send("Teacher id must be unique!");
  }

  // const password = "1234";

  // hexadecimal
  // const hash = bcrypt

  try {
    const newTeacher = await teacherModel.create({
      // password,
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
  return res.status(200).send({
    message: "Teacher with the given id has been deleted successfully",
  });
};

const updateById = async (req, res) => {
  const { id } = req.params;
  const { scheduleTime } = req.body;
   console.log('ss: ', scheduleTime)
  if (!id || !scheduleTime) {
    return res
      .status(406)
      .send({ message: "both id and schedule time is needed." });
  }

  const foundRecord = await teacherModel.findOne({ _id: id });
  if (!foundRecord) {
    return res.status(404).send({ message: "Teacher not found" });
  }
  try {
    const updatedTeacher = await teacherModel.findOneAndUpdate(
      { _id: id },
      { scheduleTime },
      { new: true }
    );
    console.log(updatedTeacher)
    const allTeacher = await teacherModel.find({});
    return res.status(200).send(allTeacher);
  } catch (error) {
    return res.status(500).send({ message: "Internal server error" });
  }
};

module.exports = { createOne, findAll, deleteById, updateById };
