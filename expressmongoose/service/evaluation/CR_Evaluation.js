const mongoose = require("mongoose");
require("../../models/Stud_Form");

const performanceForm = mongoose.model("PerformanceForm");

const createOne = async (req, res) => {
  try {
    const newEvaluation = await performanceForm.create(req.body);
    return res.status(201).send(newEvaluation);
  } catch (err) {
    return res.status(500).send(err);
  }
};

const findAll = async (req, res)=>{
    try{
        const allEvaluations = await performanceForm.find();
        return res.status(200).send(allEvaluations);
    }catch(err){
        return res.status(500).send(err);
    }
}


const findById = async (req, res)=>{
    const {id} = req.params;
    try{
        const allEvaluations = await performanceForm.findOne({ _id: id });
        return res.status(200).send(allEvaluations);
    }catch(err){
        return res.status(500).send(err);
    }
}

const findByTeacherId = async (req, res)=>{
  const {teacherId} = req.params;
  try{
      const allEvaluations = await performanceForm.findOne({ _id: id });
      return res.status(200).send(allEvaluations);
  }catch(err){
      return res.status(500).send(err);
  }
}

module.exports = { createOne, findAll, findById };
