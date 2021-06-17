import React from "react";

function Product({ other }) {
  return (
    <div>
      <img src={other.productImgURL} alt={other.productImg} />
    </div>
  );
}

export default Product;
