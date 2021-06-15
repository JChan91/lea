import React, { useState } from "react";
import "../css/Register.scss";
import { BsFillQuestionDiamondFill } from "react-icons/bs";

// useState로 Form을 저장한다 <-- 동일한 것들 통합
// Button 클릭 시 state를 App으로 끌어올린다

const Register = () => {
  const [form, setForm] = useState({
    productImg: "",
    productImgURL: "",
    productName: "",
    seller: "",
    productDetail: "",
    price: "",
    date: "",
    location: "서울",
  });

  // Spread Syntax
  const onPreImg = (e) => {
    if (!e.target.files[0]) {
      <BsFillQuestionDiamondFill className="none-img" />;
    } else {
      setForm({ productImg: e.target.files[0] });

      let reader = new FileReader();
      let profile = e.target.files[0];

      reader.onloadend = () => {
        console.log(reader.result);
        setForm({ productImgURL: reader.result });
      };

      reader.readAsDataURL(profile);
    }
  };

  const onChange = (e) => {
    let inData = e.target.value;

    if (e.target.name === "price") {
      console.log(form.price);
      inData = parseInt(inData).toLocaleString();
    }

    setForm({ ...form, [e.target.name]: inData });
  };

  const onClick = (e) => {
    console.log(form);
    e.preventDefault();
  };

  return (
    <div>
      {/* Product Image */}
      <div className="prev-img">
        {form.productImg === "" ? (
          <BsFillQuestionDiamondFill className="none-img" />
        ) : (
          <img src={form.productImgURL} alt="..." />
        )}
      </div>

      <form className="inputForm product-form">
        {/* Product Upload */}
        <div className="input-group mb-3">
          <input
            type="file"
            accept="image/*"
            name="productImg"
            value={form.img}
            className="form-control input-img"
            id="inputGroupFile02"
            onChange={onPreImg}
          />
        </div>

        {/* Seller */}
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            판매자 이름
          </label>
          <input
            type="text"
            name="seller"
            value={form.seller}
            className="form-control"
            id="exampleInputPassword1"
            onChange={onChange}
          />
        </div>

        {/* Product Name */}
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            제품명
          </label>
          <input
            type="text"
            name="productName"
            value={form.productName}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={onChange}
          />
        </div>

        {/* Product Detail */}
        <div className="form-floating">
          <textarea
            className="form-control"
            name="productDetail"
            value={form.productDetail}
            placeholder="Leave a comment here"
            id="floatingTextarea"
            onChange={onChange}
          ></textarea>
          <label htmlFor="floatingTextarea">상품 설명</label>
        </div>

        {/* Price */}
        <div className="input-group">
          <input
            type="text"
            className="form-control price"
            name="price"
            value={form.price}
            onChange={onChange}
          />
          <span className="input-group-text">\</span>
        </div>

        {/* Expired Date*/}
        <div>
          <p>기간</p>
          <input
            type="datetime-local"
            className="date"
            name="date"
            value={form.date}
            onChange={onChange}
          ></input>
        </div>

        {/* Location */}
        <div>
          <select
            className="form-select form-select-sm"
            aria-label=".form-select-sm example"
            onChange={onChange}
          >
            <option>거래 장소</option>
            <option value="seoul">서울</option>
            <option value="busan">부산</option>
          </select>
        </div>

        {/* Submit */}
        <div className="d-grid gap-2 btn">
          <button className="btn btn-primary" type="submit" onClick={onClick}>
            상품 등록
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
