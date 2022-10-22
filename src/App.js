import React from "react";
import ProductContextProvider from "./Context/ProductContextProvider";
import Navbar from "./Components/Navbar/Navbar";
import CardContainer from "./Components/ProductStore/CardContainer";
import CartReducerContext from "./Context/CartReducerContext";

function App() {
  return (
    <ProductContextProvider>
      <CartReducerContext>
        <Navbar />
        <CardContainer />
      </CartReducerContext>
    </ProductContextProvider>
  );
}

export default App;
