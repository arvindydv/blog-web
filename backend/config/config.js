require("dotenv").config({ path: __dirname + "/../.env" });
module.exports = {
  development: {
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    host: process.env.PGHOST,
    dialect: "postgres", // or any other dialect you're using
    ssl: true,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // You may need to set this to false depending on your PostgreSQL SSL configuration
      },
    },
    define: {
      underscored: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
      deletedAt: "deleted_at",
    },
  },
  test: {
    username: "",
    password: "",
    database: "",
    host: "",
    dialect: "",
  },
  production: {
    username: "",
    password: "",
    database: "",
    host: "",
    dialect: "",
  },
};
