import React, { createContext, useReducer } from "react";

export const CartContext = createContext();

const firstInit = {
  selectedItems: [],
  totalQuantity: 0,
  totalPrice: 0,
  isCheckedOut: false,
};

const sumItems = (selectedItems) => {
  const totalQuantity = selectedItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  let totalPrice = selectedItems
    .reduce((total, item) => total + item.quantity * item.price, 0)
    .toFixed(2);

  return { totalPrice, totalQuantity };
};

const reducer = (state, action) => {
  console.log(state)
  const { type, payLoad } = action;
  switch (type) {
    case "ADD_ITEM":
      state.selectedItems =  [...state.selectedItems, { ...payLoad, quantity: 1 }];
      return {
        ...state,
        ...sumItems(state.selectedItems),
      };
    case "REMOVE_ITEM":
      const newSelectedItems = state.selectedItems.filter(
        (item) => item.id !== payLoad.id
      );
      return {
        ...state,
        selectedItems: [...newSelectedItems],
        ...sumItems(newSelectedItems),
      };
    case "INCREASE":
      const indexI = state.selectedItems.findIndex(
        (item) => item.id === payLoad.id
      );
      return {
        ...state,
        ...state.selectedItems[indexI].quantity++,
        ...sumItems(state.selectedItems),
      };
    case "DECREASE":
      const indexD = state.selectedItems.findIndex(
        (item) => item.id === payLoad.id
      );
      return {
        ...state,
        ...state.selectedItems[indexD].quantity--,
        ...sumItems(state.selectedItems),
      };
    case "CLEAR_ALL":
      return firstInit;
    default:
      return firstInit;
  }
};

const CartContextProvider = (props) => {
  const [cartReducer, cartDispatch] = useReducer(reducer, firstInit);

  return (
    <CartContext.Provider value={{ cartReducer, cartDispatch }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
