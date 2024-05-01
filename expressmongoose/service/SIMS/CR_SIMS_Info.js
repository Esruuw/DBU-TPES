const { simsDbConnection } = require('../../database/sims_db')

const SIMSInfoSchema = require("../../models/SIMSDetails");
const { isValidRole } = require('../../utils/isValidRole');

const SIMS_DB_Info = simsDbConnection.model("SIMSInfo", SIMSInfoSchema);

const createOne = async (req, res) => {
    const { dbuId, name, role } = req.body;
    if (!dbuId || !name || !role) {
        return res.status(400).send({ message: "Bad request." });
    }

    if (!isValidRole(role)) {
        return res.status(400).send({ message: "Invalid role.", hint: "Role must be one of ['admin', 'student', 'teacher', 'dean']" });
    }

    const foundId = await SIMS_DB_Info.findOne({ dbuId });
    if (foundId) {
        return res.status(406).send({ message: "Pre registered id." });
    }
    try {
        const sims_db_Info = await SIMS_DB_Info.create({
            dbuId,
            name,
            role,
        });
        return res.status(201).send(sims_db_Info);
    } catch (error) {
        return res.status(500).send({ message: "Internal server error" });
    }
}

const findAll = async (req, res) => {
    try {
        const allRecords = await SIMS_DB_Info.find();
        return res.status(200).send(allRecords);
    } catch (error) {
        return res.status(500).send({ message: "Internal server error" });
    }
}

const findById = async (req, res) => {
    const { id } = req.params;
    const foundRecord = await SIMS_DB_Info.findOne({ _id: id });
    if (!foundRecord) {
        return res.status(404).send({ message: "Record not found" });
    }
    return res.status(200).send(foundRecord);
} 


const findByDbuId = async (req, res) => {
    const { dbuId } = req.params;
    const foundRecord = await SIMS_DB_Info.findOne({ dbuId });
    if (!foundRecord) {
        return res.status(404).send({ message: "Record not found" });
    }
    return res.status(200).send(foundRecord);
} 

module.exports = { createOne, findAll, findById, findByDbuId }