const mysql = require("mysql2");

// const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost", // hot de ma base de donné
  user: "nicordo",
  password: "9412",
  database: "ecofashion",
});
connection.connect(function (err) {
  if (err) {
    console.log("erreur de connextion a la bas de donnés", err);
    return;
  }
  console.log("connecté a la bas de donné avec MySQL.");
});

module.exports = connection;
