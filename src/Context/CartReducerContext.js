import React, { createContext, useReducer } from "react";

const ReducerContext = createContext();

const firstInit = {};

const reducer = (state, action) => {
  const { type, id, title, price, image } = action;
  switch (type) {
    case "add":
      return {
        ...state,
        [`${id}`]: { title: title, price: price, image: image, number: 1 },
      };
    case "delete":
      delete state[`${id}`];
      return state;
    case "addOne":
      return { ...state, [`${id}`]: { ...id, number: state.id.number + 1 } };
    case "removeOne":
      return { ...state, [`${id}`]: { ...id, number: state.id.number - 1 } };
    default:
      return state;
  }
};

const CartReducerContext = (props) => {
  const [cartReducer, cartDispatch] = useReducer(reducer, firstInit);
  

  return (
    <ReducerContext.Provider value={[cartReducer, cartDispatch]}>
      {props.children}
    </ReducerContext.Provider>
  );
};

export default CartReducerContext;
export { ReducerContext };
