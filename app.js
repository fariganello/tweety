const express = require("express");
const app = express();

app.use(function(req, res, next) {
  console.log("Request recibida");
  next();
});

app.use("/special", function(req, res, next) {
  console.log("Zona especial");
  next();
});
