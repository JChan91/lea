import React from "react";
import { Link } from "react-router-dom";

function Product({ products }) {
  return (
    <div>
      {products ? (
        products.map((pd) => {
          return (
            <Link key={pd.seller} to={`/main/${pd.seller}`}>
              <img src={pd.productImgURL} alt="..." />
            </Link>
          );
        })
      ) : (
        <p>No</p>
      )}
    </div>
  );
}

export default Product;
