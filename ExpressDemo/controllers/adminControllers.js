const { sendSuccess, sendError } = require("../utils/responseHelpers");
const STATUS_CODES = require("../constants/statusCodes");
const MESSAGES = require("../constants/messages");

const adminDefault = (req, res) => {
  res.send("<h1 align='center'>Admin Default Page</h1>");
};

const adminHome = (req, res) => {
  res.send("<h1 align='center'>Admin Home Page</h1>");
};

const adminEmp = (req, res) => {
  console.log(req.params.id);
  // res.send("<h1 align='center'>Admin Employees Page</h1>");
  // res.status(404).send("<h1 align='center'>Admin Employees Page</h1>");

  // res.status(404).json({
  //   success: true,
  //   message: "User Found...",
  //   data: { unm: "Rahul", uid: req.params.id },
  //   statusCode: 200,
  // });
  return sendSuccess(res, STATUS_CODES.OK, MESSAGES.USER.FETCHED, {
    unm: "Rahul",
    uid: req.params.id,
  });
};

const UserModel = require("../models/userModel");
const bcrypt = require("bcrypt");

const sanatizeUser = (user) => {
  user = user.toObject ? user.toObject() : { ...user };
  delete user["userPwd"];

  return user;
};

const adminAddUser = async (req, res, next) => {
  try {
    const { unm, pwd, mailId } = req.body;

    if (!unm || !pwd || !mailId)
      return sendError(
        res,
        STATUS_CODES.BAD_REQUEST,
        MESSAGES.AUTH.MISSING_VALUES,
      );

    const hashedPwd = await bcrypt.hash(pwd, 10);

    let newUser = new UserModel({
      userName: unm,
      userPwd: hashedPwd,
      userEmail: mailId,
    });
    newUser = await newUser.save();

    console.log(newUser);

    return sendSuccess(
      res,
      STATUS_CODES.OK,
      MESSAGES.USER.CREATED,
      sanatizeUser(newUser),
    );
  } catch (err) {
    next(err);
  }
};

// To display all users
const adminShowUsers = async (req, res, next) => {
  try {
    // const allUsers = await UserModel.find({}, { userPwd: 0 });
    // const allUsers = await UserModel.find().select("userName userEmail -_id");

    // console.log(req.cookies.jwtToken);

    const allUsers = await UserModel.find();

    return sendSuccess(
      res,
      STATUS_CODES.OK,
      MESSAGES.USER.FETCHED_ALL,
      allUsers.map(sanatizeUser),
    );
  } catch (err) {
    next(err);
  }
};

// To delete user
const deleteUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndDelete(id);

    if (!user)
      return sendError(res, STATUS_CODES.NOT_FOUND, MESSAGES.USER.NOT_FOUND);

    return sendSuccess(res, STATUS_CODES.OK, MESSAGES.USER.DELETED);
  } catch (err) {
    next(err);
  }
};

// Find User by ID
const adminFindUser = async (req, res, next) => {
  try {
    const user = await UserModel.findById(req.params.id);
    if (!user)
      return sendError(res, STATUS_CODES.NOT_FOUND, MESSAGES.USER.NOT_FOUND);

    return sendSuccess(
      res,
      STATUS_CODES.OK,
      MESSAGES.USER.FETCHED,
      sanatizeUser(user),
    );
  } catch (err) {
    next(err);
  }
};

// To update the user details
const adminUpdateUser = async (req, res, next) => {
  try {
    const { mailId } = req.body;

    if (!mailId)
      return sendError(
        res,
        STATUS_CODES.BAD_REQUEST,
        MESSAGES.AUTH.MISSING_VALUES,
      );

    const user = await UserModel.findByIdAndUpdate(
      req.params.id,
      {
        userEmail: mailId,
      },
      {
        new: true,
        runValidators: true,
      },
    );
    if (!user)
      return sendError(res, STATUS_CODES.NOT_FOUND, MESSAGES.USER.NOT_FOUND);

    return sendSuccess(
      res,
      STATUS_CODES.OK,
      MESSAGES.USER.UPDATED,
      sanatizeUser(user),
    );
  } catch (err) {
    next(err);
  }
};

module.exports = {
  adminDefault,
  adminHome,
  adminEmp,
  adminAddUser,
  adminShowUsers,
  deleteUser,
  adminFindUser,
  adminUpdateUser,
};
