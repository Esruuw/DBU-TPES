const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const saltRounds = 10;
const user = mongoose.model("UserInfo");

const findAll = async (req, res) => {
    try {
        const allRecords = await user.find();
        return res.status(200).send(allRecords);
    } catch (error) {
        return res.status(500).send({ message: "Internal server error" });
    }
}

const findByDbuId = async (req, res) => {
    const { dbuId } = req.params;
    const foundRecord = await user.findOne({ dbuId });
    if (!foundRecord) {
        return res.status(404).send({ message: "Record not found" });
    }
    return res.status(200).send(foundRecord);
}

const findById = async (req, res) => {
    const { id } = req.params;
    const foundRecord = await user.findOne({ _id: id });
    if (!foundRecord) {
        return res.status(404).send({ message: "Record not found" });
    }
    return res.status(200).send(foundRecord);
}

const updateById = async (req, res) => {
    const { id } = req.params;
    const { dbuId, email, password } = req.body;

    if (!dbuId || !email || !password) {
        return res.status(400).send({ message: "Bad request." });
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const foundRecord = await user.findOne({ _id: id });
    if (!foundRecord) {
        return res.status(404).send({ message: "Record not found" });
    }

    try {
        const updatedRecord = await user.findOneAndUpdate(
            { _id: id },
            { dbuId, email, password: hashedPassword },
            { new: true }
        );
        return res.status(200).send(updatedRecord);
    } catch (error) {
        return res.status(500).send({ message: "Internal server error" });
    }
}

const deleteById = async (req, res) => {
    const { id } = req.params;

    const foundRecord = await user.findOne({ _id: id });
    if (!foundRecord) {
        return res.status(404).send({ message: "Record not found" });
    }

    const deletedRecord = await user.deleteOne({ id });
    if (!deletedRecord) {
        return res.status(404).send({ message: "Record not found" });
    }
    return res.status(200).send({ message: "Record deleted successfully" });
}

module.exports = { findAll, findByDbuId, findById, deleteById, updateById };
