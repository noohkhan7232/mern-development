const { sendError } = require("../utils/responseHelpers");

const errorHandler = (err, req, res, next) => {
  console.log("Error Handling Middleware....");
  return sendError(res, err.statusCode, err.message, err);
};

module.exports = errorHandler;
