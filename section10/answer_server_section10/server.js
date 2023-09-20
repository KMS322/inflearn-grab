const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());

app.get("/products", (req, res) => {
  const query = req.query;
  console.log("Query : ", query);
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

app.post("/products", (req, res) => {
  const body = req.body;
  res.send({
    body,
  });
});

app.get("/products/:id/event/:eventId", (req, res) => {
  const { id, eventId } = req.params;
  res.send(`id는 ${id}와  ${eventId}입니다.`);
});

app.listen(port, () => {
  console.log("서버가 돌아가고 있다.");
});
