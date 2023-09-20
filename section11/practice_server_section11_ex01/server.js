const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;
const models = require("./models");

app.use(express.json());
app.use(cors());

app.get("/products", (req, res) => {
  models.Product.findAll({
    order: [["createdAt", "DESC"]],
    attributes: ["id", "name", "price", "createdAt", "seller", "imageUrl"],
  })
    .then((result) => {
      res.send({
        products: result,
      });
    })
    .catch((err) => {
      console.error(err);
    });
  const query = req.query;
});

app.post("/products", (req, res) => {
  const body = req.body;
  const { name, description, price, seller } = body;
  if (!name || !description || !price || !seller) {
    res.send("다시 입력해라");
  }
  models.Product.create({
    name,
    price,
    description,
    seller,
  })
    .then((result) => {
      res.send([result]);
    })
    .catch((err) => {
      console.error(err);
    });
});

app.get("/products/:id", (req, res) => {
  const { id } = req.params;
  models.Product.findOne({
    where: {
      id,
    },
  })
    .then((result) => {
      res.send({
        product: result,
      });
    })
    .catch((err) => {
      console.error(err);
    });
});

app.listen(port, () => {
  console.log("서버가 돌아가고 있다.");
  models.sequelize
    .sync()
    .then((result) => {
      console.log("디비 연동 성공");
    })
    .catch((err) => {
      console.error(err);
      process.exit();
    });
});
