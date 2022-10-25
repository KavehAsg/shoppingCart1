import React, { createContext, useReducer } from "react";

export const ReducerContext = createContext();

const firstInit = {
  selectedItems: [],
  totalQuantity: 0,
  totalPrice: 0,
  isCheckedOut: false,
};

const reducer = (state, action) => {
  const { type, payLoad } = action;
  switch (type) {
    case "ADD_ITEM":
      return { ...state, selectedItems: [...state.selectedItems , {...payLoad , quantity: 0}] };
    case "REMOVE_ITEM":
      const newSelectedItems = state.selectedItems.filter(
        (item) => item.id !== payLoad.id
      );
      return { ...state, selectedItems: [...newSelectedItems] };
    case "INCREASE":
      const indexI = state.selectedItems.findIndex(
        (item) => item.id === payLoad.id
      );
      return { ...state, ...state.selectedItems[indexI].quantity++ };
    case "DNCREASE":
      const indexD = state.selectedItems.findIndex(
        (item) => item.id === payLoad.id
      );
      return { ...state, ...state.selectedItems[indexD].quantity-- };
    case "CLEAR_ALL":
      return firstInit;
    default:
      return firstInit;
  }
};

const CartReducerContext = (props) => {
  const [cartReducer, cartDispatch] = useReducer(reducer, firstInit);

  return (
    <ReducerContext.Provider value={{ cartReducer , cartDispatch }}>
      {props.children}
    </ReducerContext.Provider>
  );
};

export default CartReducerContext;
