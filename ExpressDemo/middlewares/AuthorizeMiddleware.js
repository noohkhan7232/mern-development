const STATUS_CODES = require("../constants/statusCodes");
const { sendError } = require("../utils/responseHelpers");

function authorize(role) {
  return (req, res, next) => 
    {
    
    if (req.user.role !== role)
      return sendError(res, STATUS_CODES.FORBIDDEN, MESSAGES.AUTH.UNAUTHORIZED);

    next()

  };
}

module.exports = authorize;
