import React, { useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
import Register from "./Register";
import Main from "./Main";
import "../css/App.css";

function App() {
  const [products, setProduct] = useState([]);

  const handleSubmit = (product) => {
    setProduct(products.concat(product));
  };

  return (
    <div className="App nav-bar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            L · E · A
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  상품 등록
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Switch>
        <Route exact path="/" render={() => <Main products={products} />} />
        <Route
          path="/register"
          render={() => <Register handleSubmit={handleSubmit} />}
        />
      </Switch>
    </div>
  );
}

export default App;
