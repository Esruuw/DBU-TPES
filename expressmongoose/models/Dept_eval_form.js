const mongoose = require("mongoose");
const DeptPerformanceFormSchema = new mongoose.Schema(
   {
      studentId: String,
      teacherId: String,
    performance : String,
    punctuality : String,
    feedback: String,
    subjectKnowledge : String,
    assesmentMethod : String,
    interactionWithStudent : String,
    classRoomManagement: String, 
    communicationWithStudent: String,
    classRoom: String,
    comprehensiveFeedback: String,
    timeManagement: String,
   },
   {
    collection : "DeptPerformanceForm",
   }
);
mongoose.model("DeptPerformanceForm", DeptPerformanceFormSchema);