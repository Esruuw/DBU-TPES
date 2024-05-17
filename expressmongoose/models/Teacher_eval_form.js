const mongoose = require("mongoose");
const PeerPerformanceFormSchema = new mongoose.Schema(
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
    collection : "PeerPerformanceForm",
   }
);
mongoose.model("PeerPerformanceForm", PeerPerformanceFormSchema);