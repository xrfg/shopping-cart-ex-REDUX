import data from "./products.json";

const initialState = {
  products: data,
  cart: [],
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "addtocart":
      return {
        products: state.products.map((prod) =>
          prod.title === action.payload.title
            ? { ...prod, inventory: prod.inventory - 1 }
            : prod
        ),
        cart: state.cart.find((item) => item.title === action.payload.title)
          ? state.cart.map((item) =>
              item.title === action.payload.title
                ? { ...item, number: item.number + 1 }
                : item
            )
          : [
              ...state.cart,
              {
                id: action.payload.id,
                title: action.payload.title,
                price: action.payload.price,
                number: 1,
              },
            ],
      };

    case "removeitem":
      return {
        products: state.products.map((item) =>
          item.title === action.payload.title
            ? { ...item, inventory: item.inventory + 1 }
            : item
        ),
        cart:
          action.payload.number === 1
            ? state.cart.filter((item) => item.title !== action.payload.title)
            : state.cart.map((item) =>
                item.title === action.payload.title
                  ? { ...item, number: item.number - 1 }
                  : item
              ),
      };
    case "removeall":
      return {
        products: state.products.map((item) =>
          item.title === action.payload.title
            ? { ...item, inventory: item.inventory + action.payload.number }
            : item
        ),
        cart: state.cart.filter((item) => item.title !== action.payload.title),
      };
    default:
      return state;
  }
};
