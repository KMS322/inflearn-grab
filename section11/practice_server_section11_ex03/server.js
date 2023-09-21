const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;
const models = require("./models");

app.use(express.json());
app.use(cors());

app.get("/products", (req, res) => {
  const query = req.query;
  console.log("Query : ", query);
  models.Product.findAll({
    // limit: 1,
    order: [["createdAt", "DESC"]],
    attributes: ["id", "name", "price", "createdAt", "seller", "imageUrl"],
  })
    .then((result) => {
      res.send({
        products: result,
      });
    })
    .catch((error) => {
      console.error(error);
    });
});

app.post("/products", (req, res) => {
  const body = req.body;
  const { name, price, seller, description } = body;
  if (!name || !price || !seller || !description) {
    res.send("모든 데이터 입력해라");
  }
  models.Product.create({
    name,
    price,
    seller,
    description,
  })
    .then((result) => {
      res.send({ result });
    })
    .catch((error) => {
      console.error(error);
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
    .catch((error) => {
      console.error(error);
    });
});

app.listen(port, () => {
  console.log("서버가 돌아가고 있다.");
  models.sequelize
    .sync()
    .then((result) => {
      console.log("DB연결");
    })
    .catch((error) => {
      console.error(error);
    });
});
