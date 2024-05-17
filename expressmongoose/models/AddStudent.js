const mongoose = require("mongoose");
const AddStudentInfoSchema = new mongoose.Schema(
    {
        
        dbuId: { type: String, unique: true },
        name: String,
        email:String,
        department: String,
        year: String,
        semester: String,
        role: String,
    },
    {
        collection: "AddStudentInfo",
    }
);

mongoose.model("AddStudentInfo", AddStudentInfoSchema);