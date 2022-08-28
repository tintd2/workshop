const express = require("express");
const app = express();
const port = 3000;

var mysql = require("mysql");
var con = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

console.log(con);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  var sql = "SELECT * FROM tasks";
  con.query(sql, function (err, results) {
    if (err) throw err;
    //   res.send(results);
    console.log(`Example app listening on port ${results}`);
  });
  console.log(`Example app listening on port ${port}`);
});
