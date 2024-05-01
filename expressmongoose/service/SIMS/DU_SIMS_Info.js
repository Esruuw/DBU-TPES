const { simsDbConnection } = require('../../database/sims_db')

const SIMSInfoSchema = require("../../models/SIMSDetails");
const { isValidRole } = require('../../utils/isValidRole');

const SIMS_DB_Info = simsDbConnection.model("SIMSInfo", SIMSInfoSchema);

const updateById = async (req, res) => {
    const { id } = req.params;
    const { dbuId, name, role } = req.body;

    if (!dbuId || !name || !role) {
        return res.status(400).send({ message: "Bad request." });
    }

    if (!isValidRole(role)) {
        return res.status(400).send({ message: "Invalid role.", hint: "Role must be one of ['admin', 'student', 'teacher', 'dean']" });
    }

    const foundRecord = await SIMS_DB_Info.findOne({ _id: id });
    if (!foundRecord) {
        return res.status(404).send({ message: "Record not found" });
    }
    try {
        const updatedUser = await SIMS_DB_Info.findOneAndUpdate({ _id: id }, {dbuId, name, role }, { new: true });
        return res.status(200).send(updatedUser);
    } catch (error) {
        return res.status(500).send({ message: "Internal server error" });
    }
}

const deleteById = async (req, res) => {
    const { id } = req.params;
    const deletedRecord = await SIMS_DB_Info.deleteOne({ _id: id });
    if (!deletedRecord) {
        return res.status(404).send({ message: "Record not found" });
    }
    return res.status(200).send({ message: "Record deleted successfully" });
}

module.exports = { deleteById, updateById }