const mongoose = require("mongoose");
const performanceFormSchema = new mongoose.Schema(
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
   },
   {
    collection : "PerformanceForm",
   }
);
mongoose.model("PerformanceForm", performanceFormSchema);