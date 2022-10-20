import React from "react";
import ProductContextProvider from "./Context/ProductContextProvider";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <ProductContextProvider>
      <Navbar />

    </ProductContextProvider>
  );
}

export default App;
