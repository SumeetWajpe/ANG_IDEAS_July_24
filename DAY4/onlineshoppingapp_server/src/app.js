const express = require("express");
const app = express(); // app represents the application
const port = 3000;

const productsRouter = require("./routes/products.route");

// middlewares
app.use(express.static("src/static")); // add express.static as a middleware
app.use(express.json());

// view engine
app.set("views", "src/views");
app.set("view engine", "pug");
// routes
app.use("/products", productsRouter); // register the products router with the application

// register an endpoint for GET verb with path as /
app.get("/", (req, res) => {
  //   res.send("<h1>Hello World!</h1>");
  res.sendFile("Index.html", { root: __dirname });
});

// app.get("/style.css", (req, res) => {
//   //   res.send("<h1>Hello World!</h1>");
//   res.sendFile("style.css", { root: __dirname });
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
