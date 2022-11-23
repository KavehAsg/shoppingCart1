import React from "react";
import ProductContextProvider from "./Context/ProductContextProvider";
import Navbar from "./Components/Navbar/Navbar";
import CardContainer from "./Components/ProductStore/CardContainer";
import CartContextProvider from "./Context/CartReducerContext";
import DetailsPage from "./Components/DetailsPage/DetailsPage";
import CartPage from "./Components/CartPage/CartPage";
import { Route, Switch, Redirect } from 'react-router-dom';

function App() {

  return (
    <ProductContextProvider>
      <CartContextProvider>
        <Navbar />
        <Switch>
          <Route path='/detailpage/:id' component={DetailsPage} />
          <Route path='/cart' component={CartPage} />
          <Route path='/' component={CardContainer} />
          <Redirect to='/' />
        </Switch>
      </CartContextProvider>
    </ProductContextProvider>
  );
}

export default App;
