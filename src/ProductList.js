import React from "react";
import Product from "./Product";
import { connect } from "react-redux";

function ProductList(props) {
  return (
    <ul>
      {props.products.map((item) => {
        return <Product key={item.id} item={item} />;
      })}
    </ul>
  );
}

export default connect((state) => state)(ProductList);
