const { Router } = require("express");
const { registerUser } = require("../controllers/user.controller");

const router = Router();

// router.route("/signup").post(registrationValidator, registerUser);
router.post("/signup", registerUser);

module.exports = router;
