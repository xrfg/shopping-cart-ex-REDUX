import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "./App";

export default function Cart() {
  const { cart, setCart, products, setProducts } = useContext(MyContext);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    let totalInCart = cart.reduce((acc, item) => {
      return (acc = acc + item.price * item.number);
    }, 0);

    setTotal(totalInCart);
  }, [cart]);

  const RemoveItem = (item) => {
    if (item.number === 1) {
      let updatedCart = cart.filter((elem) => elem.title !== item.title);
      setCart(updatedCart);
    } else {
      let updatedCart = cart.map((elem) => {
        if (elem.title === item.title) {
          elem.number--;
          return elem;
        } else return elem;
      });
      setCart(updatedCart);
    }

    let updatedProducts = products.map((elem) => {
      if (elem.title === item.title) {
        elem.inventory++;
        return elem;
      } else {
        return elem;
      }
    });
    setProducts(updatedProducts);
  };

  const DeleteAll = (item) => {
    let updatedCart = cart.filter((elem) => elem.title !== item.title);
    setCart(updatedCart);

    let updatedProducts = products.map((elem) => {
      if (elem.title === item.title) {
        elem.inventory = elem.inventory + item.number;
        return elem;
      } else return elem;
    });
    setProducts(updatedProducts);
  };

  return (
    <>
      <h1>TOTAL: {total.toFixed(2)}</h1>
      <ul>
        {cart.map((item) => {
          return (
            <div>
              <li>
                {item.title} | ${item.price} | x{item.number}
              </li>
              <button onClick={() => RemoveItem(item)}>Remove Item</button>
              <button onClick={() => DeleteAll(item)}>Remove All</button>
            </div>
          );
        })}
      </ul>
    </>
  );
}
