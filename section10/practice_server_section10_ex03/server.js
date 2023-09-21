const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());

app.get("/products", (req, res) => {
  const query = req.query;
  console.log(query);
  res.end(
    JSON.stringify({
      products: [
        {
          id: 1,
          name: "농구공",
          price: 200000,
          seller: "조던",
          imageUrl: "images/products/basketball1.jpeg",
        },
        {
          id: 2,
          name: "축구공",
          price: 150000,
          seller: "메시",
          imageUrl: "images/products/soccerball1.jpg",
        },
        {
          id: 3,
          name: "키보드",
          price: 210000,
          seller: "그랩",
          imageUrl: "images/products/keyboard1.jpg",
        },
      ],
    })
  );
});

app.post("/products", (req, res) => {});

app.get("/products/:id/event/:value", (req, res) => {
  const { id, value } = req.params;
  console.log(`${id} 와 ${value}`);
});

app.listen(port, () => {
  console.log("서버 실행1");
});
