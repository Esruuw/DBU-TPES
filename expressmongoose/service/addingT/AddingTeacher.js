const mongoose = require("mongoose");

require("dotenv").config();
require("../../database/main_db");
require("../../models/AddTeacher");

const teacherModel = mongoose.model("AddTeacherInfo");

const createOne = async (req, res) => {
  const { teacherId, name, course, department } = req.body;

  if (!teacherId || !name || !course || !department) {
    return res.status(400).send("please the whole input field!");
  }

  const teacher = await teacherModel.findOne({ teacherId });
  if (teacher) {
    return res.status(406).send("Teacher id must be unique!");
  }

  try {
    const newTeacher = await teacherModel.create({
      teacherId,
      name,
      course,
      department,
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

module.exports = { createOne, findAll };
