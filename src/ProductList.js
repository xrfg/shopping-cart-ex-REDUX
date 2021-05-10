import React, { useContext } from "react";
import { MyContext } from "./App";
import Product from "./Product";

export default function ProductList() {
  const { products } = useContext(MyContext);
  return (
    <ul>
      {products.map((item) => {
        return <Product item={item} />;
      })}
    </ul>
  );
}
