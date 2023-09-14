const express = require("express");
const bodyParser = require("body-parser");
require("./mongodbConnection");
const Product = require("./productSchema");
const app = express();
const port = 5000;
const cors=require("cors");

app.use(cors());


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/product", (req, res) => {
  Product.find({}, (err, products) => {
    if (err) {
      console.log(err);
    } else {
      res.send(products);
    }
  });
});

app.post("/product", (req, res) => {
  const { name, price, description } = req.body;

  const product = new Product({
    name,
    price,
    description,
  });

  product.save((err) => {
    if (err) {
      console.log(err);
    } else {
      res.send("Product saved successfully");
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
