const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  userEmail: { type: String, required: true, unique: true },
  userPwd: { type: String, required: true },
  createdAt: { type: Date, required: true, default: Date.now },
  isActive: { type: Boolean, required: true, default: true },
  userRole: {
    type: String,
    enum: ["admin", "user"],
    required: true,
    default: "user",
  },
});

const UserModel = mongoose.model("AppUsers", usersSchema);

module.exports = UserModel;
