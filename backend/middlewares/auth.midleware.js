const { ApiError } = require("../utils/ApiError");
const { asyncHandler } = require("../utils/asyncHandler");
const jwt = require("jsonwebtoken");
const model = require("../models");

const verifyJwt = asyncHandler(async (req, res, next) => {
  try {
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer", "");

    if (!token) {
      throw new ApiError(401, "Unauthorized request");
    }

    const decodeToken = await jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET
    );

    const user = await model.User.findByPk(decodeToken?.id, {
      attributes: {
        exclude: ["password", "refreshToken"],
      },
    });

    if (!user) {
      throw new ApiError(401, "Invalid accessToken");
    }

    req.user = user;
    next();
  } catch (error) {
    throw new ApiError(401, error.message || "Invalid access token");
  }
});

module.exports = verifyJwt;
