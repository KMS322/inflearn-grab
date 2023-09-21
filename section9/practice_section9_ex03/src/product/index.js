import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useState, useEffect } from "react";
import axios from "axios";
function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    axios
      .get(
        `https://b7d1d21e-6c41-4a63-97c7-2b4bc4e269fd.mock.pstmn.io/products/${id}`
      )
      .then((result) => {
        setProduct(result.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (!product) {
    return <h1>상품 받아오는 중이다.</h1>;
  }
  return (
    <div>
      <div id="image-box">
        <img src={`/${product.imageUrl}`} />
      </div>
      <div id="profile-box">
        <img src="/images/icons/avatar.png" />
        <span>{product.seller}</span>
      </div>
      <div id="contents-box">
        <div id="name">{product.name}</div>
        <div id="price">{product.price}</div>
        <div id="createdAt">2020년 12월 8일</div>
        <div id="description">{product.description}</div>
      </div>
    </div>
  );
}

export default ProductPage;
