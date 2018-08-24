var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/user");
var adminsRouter = require("./routes/admin");
var productsRouter = require("./routes/product");
var sellerRouter = require("./routes/seller");
var productCategory = require("./routes/productcategory");
var courierRouter = require("./routes/courier");
var orderRouter = require("./routes/userorder");
var itemRouter = require("./routes/orderitem");
// var categoryRouter = require("./routes/categoryquery");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors());

// app.use((req, res, next)=> {
//   res.header('Access-Control-Allow-Origin', '*')
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
//   next()
// })

app.use(
  cors({
    origin: ["*"],
    methods: ["GET", "HEAD", "POST", "DELETE", "PUT", "PATCH", "OPTIONS"],
    credentials: false
  })
);

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/admins", adminsRouter);
app.use("/products", productsRouter);
app.use("/sellers", sellerRouter);
app.use("/productcategory", productCategory);
app.use("/couriers", courierRouter);
app.use("/order", orderRouter);
app.use("/items", itemRouter);
// app.use("/category", categoryRouter);

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
