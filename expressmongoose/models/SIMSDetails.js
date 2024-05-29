const mongoose = require("mongoose");
const SIMSInfoSchema = new mongoose.Schema(
    {
        name: String,
        dbuId: { type: String, unique: true },
        role: String,
        email:String,
    },
    {
        collection: "SIMSInfo",
    }
);

module.exports = SIMSInfoSchema;

