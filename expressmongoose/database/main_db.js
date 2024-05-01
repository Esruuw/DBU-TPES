const mongoose = require('mongoose');
require("dotenv").config();

const attendanceDbUri = "mongodb+srv://esraelwendimu:esraelwendimu@cluster0.jowv1om.mongodb.net/main_db";

const attendanceDbConnection = mongoose.connect(attendanceDbUri)
  .then(() => console.log('Connected to attendance_db'))
  .catch(error => console.error('Error connecting to attendance_db:', error));
 
module.exports = { attendanceDbConnection }
