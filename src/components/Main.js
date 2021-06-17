import React from "react";
import Product from "./Product";

function Main({ products }) {
  return (
    <div>
      {products ? (
        products.map((pd) => {
          return <Product key={pd.seller} other={pd} />;
        })
      ) : (
        <p>상품이 없어요</p>
      )}
    </div>
  );
}

export default Main;
