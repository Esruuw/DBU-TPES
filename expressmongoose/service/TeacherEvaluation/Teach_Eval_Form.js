const mongoose = require("mongoose");
require("../../models/Teacher_eval_form");

const PeerPerformanceForm = mongoose.model("PeerPerformanceForm");

const createOne = async (req, res) => {
  try {
    const newEvaluation = await PeerPerformanceForm.create(req.body);
    return res.status(201).send(newEvaluation);
  } catch (err) {
    return res.status(500).send(err);
  }
};

const findAll = async (req, res) => {
  try {
    const allEvaluations = await PeerPerformanceForm.find();
    return res.status(200).send(allEvaluations);
  } catch (err) {
    return res.status(500).send(err);
  }
};

const findManyByTeacherId = async (req, res) => {
  const { id } = req.params; 
    try { 
    const allEvaluations = await PeerPerformanceForm.find({teacherId: id});

    return res.status(200).send(allEvaluations);
  } catch (err) {
    return res.status(500).send(err);
  }
};

const findById = async (req, res) => {
  const { id } = req.params;
  try {
    const allEvaluations = await PeerPerformanceForm.findOne({ _id: id });
    return res.status(200).send(allEvaluations);
  } catch (err) {
    return res.status(500).send(err);
  }
};

const findByTeacherId = async (req, res) => {
  const { id } = req.params;
  try {
    const allEvaluations = await PeerPerformanceForm.findOne({ _id: id });
    return res.status(200).send(allEvaluations);
  } catch (err) {
    return res.status(500).send(err);
  }
};

module.exports = { createOne, findAll, findById, findManyByTeacherId, findByTeacherId  };
