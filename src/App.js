import React, { Component, createContext, useState } from "react";
import "./App.css";
import Cart from "./Cart";
import ProductList from "./ProductList";
import data from "./products.json";

export const MyContext = createContext(null);

function App() {
  const [products, setProducts] = useState(data);
  const [cart, setCart] = useState([]);
  return (
    <MyContext.Provider value={{ products, setProducts, cart, setCart }}>
      <div className="App">
        <ProductList />
        <Cart />
      </div>
    </MyContext.Provider>
  );
}

export default App;
