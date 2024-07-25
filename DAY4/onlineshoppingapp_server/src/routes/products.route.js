const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
let products = require("../models/products.model");
// 5 products -> product-> id,title,price,rating,likes,imageUrl
router.get("/", (req, res) => {
  res.json(products);
});
router.get("/:id", (req, res) => {
  let id = +req.params.id; // read the parameter
  let theProduct = products.find(p => p.id == id);
  res.json(theProduct);
});

router.post("/new", (req, res) => {
  const newProduct = req.body;
  products.push(newProduct);
  res.json({ msg: `${newProduct.title} added successfully !` });
});

router.get("/details/:id", (req, res) => {
  let id = +req.params.id; // read the parameter
  let theProduct = products.find(p => p.id == id);
  res.render("productdetails", { theProduct });
});
router.get("/product/video", (req, res) => {
  const videoPath = path.resolve(__dirname + "/../", "videos/shoes.mp4");
  const videoSize = fs.statSync(videoPath).size;
  const CHUNK_SIZE = 10 ** 6; // 1 MB

  // range
  const range = req.headers.range;

  const start = Number(range.replace(/\D/g, ""));
  const end = Math.min(start + CHUNK_SIZE, videoSize - 1);
  const contentLength = end - start + 1;

  const headers = {
    "content-Range": `bytes ${start}-${end}/${videoSize}`,
    "Accept-Ranges": "bytes",
    "Content-Type": "video/mp4",
    "Content-Length": contentLength,
  };

  res.writeHead(206, headers);

  const videoStream = fs.createReadStream(videoPath, { start, end }); // start & end defines the range of bytes to be read !
  videoStream.pipe(res);
});

module.exports = router;
