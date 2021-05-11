import React from "react";
import { connect } from "react-redux";

function Product({ item, dispatch }) {
  return (
    <div>
      <li>
        {item.title} | ${item.price} | x{item.inventory}
      </li>
      <button
        disabled={item.inventory === 0}
        onClick={() => dispatch({ type: "addtocart", payload: item })}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default connect((state) => state)(Product);
