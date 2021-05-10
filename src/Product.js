import React, { useContext } from "react";
import { MyContext } from "./App";

export default function Product({ item }) {
  const { cart, setCart, products, setProducts } = useContext(MyContext);

  const AddToCart = (item) => {
    let alreadyExist = cart.find((elem) => elem.title === item.title);

    let index = cart.indexOf(alreadyExist);

    if (alreadyExist) {
      let cartCopy = [...cart];
      cartCopy[index].number++;
      setCart(cartCopy);
    } else {
      let newItem = {
        id: item.id,
        title: item.title,
        price: item.price,
        number: 1,
      };
      setCart([...cart, newItem]);
    }

    /* let indexProduct = products.indexOf(item);
    let ProductsCopy = [...products];
    ProductsCopy[indexProduct].inventory--; */
    let ProductsCopy = products.map((product) => {
      if (product.title === item.title) {
        product.inventory--;
        return product;
      } else return product;
    });
    setProducts(ProductsCopy);
  };
  return (
    <>
      <li>
        {item.title} | ${item.price} | x{item.inventory}
      </li>
      <button disabled={item.inventory === 0} onClick={() => AddToCart(item)}>
        Add to Cart
      </button>
    </>
  );
}
