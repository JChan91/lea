import React from "react";

function Detail({ pds }) {
  console.log(pds);
  return (
    <div>
      <h2>Detail Component</h2>
      <p>판매자 이름 : {pds[0].seller}</p>
    </div>
  );
}

export default Detail;
