const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

const Auth = require('./controller/auth');
app.use('/auth/', Auth);

const SIMS = require('./controller/simsInfo')
app.use('/sims/', SIMS);

const User = require('./controller/user')
app.use('/user/', User);

const Evaluation = require('./controller/evaluation')
app.use('/evaluation/', Evaluation);

const Teacher = require('./controller/addingT')
app.use('/teacher/', Teacher);

const criteria = require('./controller/addingC')
app.use('/criteria/', criteria);

const Student = require('./controller/addingS')
app.use('/student/', Student);

const TeacherEvaluation = require('./controller/teacherevaluation')
app.use('/teacherevaluation/', TeacherEvaluation);


const DeptEvaluation = require('./controller/deptevaluation')
app.use('/deptevaluation/', DeptEvaluation);
 
app.use((req, res, next) => {
    res.status(404).send({ message: "Route not found", hint: "Please check your URL" });
});

//const PORT = parseInt(process.env.PORT);
const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log(`Server Started at localhost://${PORT}`)
})
