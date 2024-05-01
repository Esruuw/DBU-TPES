const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

require("dotenv").config();
require('../../database/main_db')
require("../../models/userDetails");

const { simsDbConnection } = require('../../database/sims_db')

const user = mongoose.model("UserInfo");
const SIMSInfoSchema = require("../../models/SIMSDetails");
const SIMS_DB_Info = simsDbConnection.model("SIMSInfo", SIMSInfoSchema);



//login api
const login = async (req, res) => {
  const { email, password } = req.body;
  if(!email || !password){
    return res.status(400).send({message: "baq request."})
  }
  try {
    const foundUser = await user.findOne({ email });
    if (!foundUser) {
       return res.status(404).send({ message: "User not found" });
    }
    
    const isValidPassword = await bcrypt.compare(password, foundUser.password);
    if (isValidPassword) {
      const token = jwt.sign({},  process.env.JWT_SECRET);
      return res.status(200).send({ user: foundUser, token });
    } else {
      return res.status(403).send({ error: "Invalid Password" });
    }
  } catch (error) {
    return res.status(500).send({ message: "internal server error" });
  }
}




//signup api
const signup = async (req, res) => {

  const { dbuId, email, password } = req.body;

  if(!dbuId || !email || !password){
    return res.status(400).send({message: "bad request."})
  }

  const foundUser = await user.findOne({ email });
  if (foundUser) {
    return res.status(404).send({ message: "This email is already taken." });
  }

  const foundId = await SIMS_DB_Info.findOne({ dbuId });
  if (!foundId) {
    return res.status(406).send({ message: "You are not an element of DBU." });
  }
  try {
    const encryptedPassword = await bcrypt.hash(password, 10);
     const newUser = await user.create({
      dbuId,
      email,
      password: encryptedPassword,
      role: foundId.role,
    });
    return res.status(201).send(newUser);
  } catch (error) {
    return res.status(403).send({ message: "internal server error" });
  }
};

module.exports = { login, signup }