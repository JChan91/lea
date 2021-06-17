import React from "react";
import Detail from "./Detail";

function Item({ products }) {
  console.log(products);
  return (
    <div>
      <h1>Item Component</h1>
      <Detail pds={products} />
    </div>
  );
}

export default Item;
