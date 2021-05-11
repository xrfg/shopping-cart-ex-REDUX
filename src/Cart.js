import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

function Cart({ cart, dispatch }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let totalinCart = cart.reduce((acc, item) => {
      return (acc = acc + item.price * item.number);
    }, 0);

    setTotal(totalinCart);
  }, [cart]);

  return (
    <>
      <ul>
        {cart.map((item) => {
          return (
            <div key={item.id}>
              <li>
                {item.title} | ${item.price} | x{item.number}
              </li>
              <button
                onClick={() => dispatch({ type: "removeitem", payload: item })}
              >
                Remove Item
              </button>
              <button
                onClick={() => dispatch({ type: "removeall", payload: item })}
              >
                Remove All
              </button>
            </div>
          );
        })}
      </ul>
      <hr />
      <h2>Total: {total.toFixed(2)} </h2>
    </>
  );
}

export default connect((state) => state)(Cart);
