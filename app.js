var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var adminsRouter = require("./routes/admins");
var productsRouter = require("./routes/products");
var sellerRouter = require("./routes/seller");
var productCategory = require("./routes/productcategory");
var adminCourier = require("./routes/admincourier");
var courierRouter = require("./routes/couriers");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/admins", adminsRouter);
app.use("/products", productsRouter);
app.use("/sellers", sellerRouter);
app.use("/productcategory", productCategory);
app.use("/admincourier", adminCourier);
app.use("/couriers", courierRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send("error");
});

module.exports = app;
