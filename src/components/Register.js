import React, { useState } from "react";
import { useHistory } from "react-router";
import "../css/Register.scss";
import { BsFillQuestionDiamondFill } from "react-icons/bs";

// Button 클릭 시 state를 App으로 끌어올리고 Home으로 이동하기

const Register = ({ handleSubmit }) => {
  const history = useHistory();

  const locations = [
    "서울",
    "부산",
    "대구",
    "인천",
    "광주",
    "대전",
    "울산",
    "강원도",
    "경기",
    "경남",
    "경북",
    "전남",
    "전북",
    "제주",
    "충남",
    "충북",
  ];

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
    console.log(e.target.files);

    if (e.target.files[0] === undefined) {
      <BsFillQuestionDiamondFill className="none-img" />;
    } else {
      setForm({ productImg: e.target.files[0] });

      let reader = new FileReader();
      let profile = e.target.files[0];

      reader.onload = () => {
        setForm({ productImgURL: reader.result });
      };

      reader.readAsDataURL(profile);
    }
  };

  const onChange = (e) => {
    let inData = e.target.value;

    setForm({ ...form, [e.target.name]: inData });
  };

  const onClick = (e) => {
    e.preventDefault();
    handleSubmit(form);

    alert("상품을 등록했습니다");

    history.push({ pathname: "/" });
  };

  return (
    <div>
      {/* Product Image */}
      <div className="prev-img">
        {form.productImg === "" ? (
          <BsFillQuestionDiamondFill className="none-img" />
        ) : (
          <img
            className="pre-img"
            src={form.productImgURL}
            alt={form.productImg}
          />
        )}
      </div>

      <form className="inputForm product-form">
        {/* Product Upload */}
        <div className="input-group mb-3">
          <input
            type="file"
            accept="image/*"
            name="productImg"
            className="form-control input-img"
            id="inputGroupFile02"
            onChange={onPreImg}
          />
        </div>

        {/* Seller */}
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            판매자 성함
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
            물품 이름
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
          <label className="input-label" htmlFor="floatingTextarea">
            물품 설명
          </label>
        </div>

        {/* Price */}
        <div className="input-group">
          <input
            type="text"
            className="form-control price"
            placeholder="시작 가격을 입력해주세요"
            name="price"
            value={form.price}
            onChange={onChange}
          />
          <span className="input-group-text">\</span>
        </div>

        {/* Expired Date*/}
        <div className="date-loc">
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
        <div className="date-loc">
          <p>거래 위치</p>
          <select
            className="form-select form-select-sm"
            aria-label=".form-select-sm example"
            onChange={onChange}
          >
            {locations.map((loc) => {
              return (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              );
            })}
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
