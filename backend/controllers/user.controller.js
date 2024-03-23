const { asyncHandler } = require("../utils/asyncHandler");
const userValidation = require("../validators/user.validators");
const { ApiError } = require("../utils/ApiError");
const bcrypt = require("bcrypt");
const model = require("../models");

// register user api
const registerUser = asyncHandler(async (req, res) => {
  const payload = req.body;
  const parsePayload = userValidation.reqisterUserValidation.safeParse(payload);

  //   //   invalid payload
  if (!parsePayload.success) {
    console.log(parsePayload.error);
    throw new ApiError(422, "invalid payload");
  }

  //   check user exist or not
  console.log(req.body, "------");
  const existUser = await model.User.findOne({
    where: { email: payload.email },
  });

  //   console.log(existUser, "--->>>>");

  if (existUser) {
    throw new ApiError(400, "user already exists");
  }

  //    encrypt user password
  payload.password = await bcrypt.hash(payload.password, 10);

  const user = await model.User.create(payload);

  return res
    .status(201)
    .json(new ApiResponse(201, user, "user registered successfully"));
});

module.exports = {
  registerUser,
};
