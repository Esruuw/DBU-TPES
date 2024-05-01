const mongoose = require("mongoose");
const AddTeacherInfoSchema = new mongoose.Schema(
    {
        teacherId: { type: String, unique: true },
        name: String,
        course:String,
        department: String,
    },
    {
        collection: "AddTeacherInfo",
    }
);

mongoose.model("AddTeacherInfo", AddTeacherInfoSchema);