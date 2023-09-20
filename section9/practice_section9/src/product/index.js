function ProductPage() {
  return (
    <div>
      <div id="image-box">
        <img src={"/"} />
      </div>
      <div id="profile-box">
        <img src="/images/icons/avatar.png" />
        <span>{}</span>
      </div>
      <div id="contents-box">
        <div id="name">{}</div>
        <div id="price">{}</div>
        <div id="createdAt">2020년 12월 8일</div>
        <div id="description">{}</div>
      </div>
    </div>
  );
}

export default ProductPage;
