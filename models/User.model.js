const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new Schema({
  
    email: String,
    password: String,
    username: String,
    userWeight: String,
    userHeight: String,
  
  },
  {
    timestamps: true
  }
);

const User = model("User", userSchema);

module.exports = User;
