import React from "react";
import ProductContextProvider from "./Context/ProductContextProvider";
import Navbar from "./Components/Navbar/Navbar";
import CardContainer from "./Components/ProductStore/CardContainer";

function App() {
  return (
    <ProductContextProvider>
      <Navbar />
      <CardContainer />
    </ProductContextProvider>
  );
}

export default App;
