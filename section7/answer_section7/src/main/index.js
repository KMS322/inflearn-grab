import "./index.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
function MainPage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://b7d1d21e-6c41-4a63-97c7-2b4bc4e269fd.mock.pstmn.io/products"
      )
      .then((result) => {
        setProducts(result.data.products);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div>
      <div id="header">
        <div id="header-area">
          <img src="images/icons/logo.png" />
        </div>
      </div>
      <div id="body">
        <div id="banner">
          <img src="images/banners/banner1.png" />
        </div>
        <h1>판매되는 상품들</h1>
        <div id="product-list">
          {products.map((product, index) => {
            return (
              <div className="product-card" key={product.id}>
                <div>
                  <img className="product-img" src={product.imageUrl} />
                </div>
                <div className="product-contents">
                  <span className="product-name">{product.name}</span>
                  <span className="product-price">{product.price}</span>
                </div>
                <div className="product-seller">
                  <img
                    className="product-avatar"
                    src="images/icons/avatar.png"
                  />
                  <span>{product.seller}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default MainPage;
