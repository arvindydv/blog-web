const zod = require("zod");

const reqisterUserValidation = zod.object({
  firstName: zod.string().min(1, { message: "First name cannot be empty" }),
  lastName: zod.string().min(1, { message: "Last name cannot be empty" }),
  userName: zod
    .string()
    .min(3, { message: "Username must be 5 or more characters long" }),
  password: zod
    .string()
    .min(5, { message: "Password must be 5 or more characters long" }),
  email: zod.string().email({ message: "Invalid email address" }),
});

// const loginUserValidation = zod.object({

// })

module.exports = {
  reqisterUserValidation,
};
