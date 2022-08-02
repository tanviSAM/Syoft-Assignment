const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phno: { type: Number, required: true, unique: true },
    role: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamp: true,
    versionkey: false,
  }
);

//HASH password before storing in database
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 12); //salt value
  return next();
});

userSchema.methods.checkPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model("user", userSchema);
module.exports = User;
