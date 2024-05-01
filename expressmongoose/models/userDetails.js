const mongoose = require("mongoose");
const userDetailsSchema = new mongoose.Schema(
   {
    dbuId: {type: String, unique: true},
    email: {type: String, unique: true},
    password: String,
    role: String,
   },
   {
    collection : "UserInfo",
   }
);
mongoose.model("UserInfo", userDetailsSchema);
