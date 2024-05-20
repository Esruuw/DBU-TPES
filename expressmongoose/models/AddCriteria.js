const mongoose = require("mongoose");
const AddCriteriaInfoSchema = new mongoose.Schema(
    {
        standard_criteria: String,
        criteria_Id: String,

     
    },
    {
        collection: "AddCriteriaInfo",
    }
);

mongoose.model("AddCriteriaInfo", AddCriteriaInfoSchema);