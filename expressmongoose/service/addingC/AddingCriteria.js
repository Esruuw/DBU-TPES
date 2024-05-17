const mongoose = require("mongoose");

require("dotenv").config();
require("../../database/sims_db");
require("../../models/AddCriteria");

const criteriaModel = mongoose.model("AddCriteriaInfo");

const createOne = async (req, res) => {
  const { standard_criteria} = req.body;

  if (!standard_criteria) {
    return res.status(400).send("please the whole input field!");
  }

//   const teacher = await teacherModel.findOne({ teacherId });
//   if (teacher) {
//     return res.status(406).send("Teacher id must be unique!");
//   }


  // hexadecimal
  // const hash = bcrypt

  try {
    const newCriteria = await criteriaModel.create({
      // password,
      standard_criteria,
    });
    return res.status(201).send(newCriteria);
  } catch (err) {
    return res.status(500).send(err);
  }
};

const findAll = async (req, res) => {
  try {
    const allCriteria = await criteriaModel.find({});
    return res.status(200).send(allCriteria);
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
