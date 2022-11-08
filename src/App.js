import React from "react";
import ProductContextProvider from "./Context/ProductContextProvider";
import Navbar from "./Components/Navbar/Navbar";
import CardContainer from "./Components/ProductStore/CardContainer";
import CartContextProvider from "./Context/CartReducerContext";
import DetailsPage from "./Components/DetailsPage/DetailsPage";
import CartPage from "./Components/CartPage/CartPage";
import { Route, Switch } from 'react-router-dom';

function App() {

  const scrollHandler = (id) =>
    id.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

  return (
    <ProductContextProvider>
      <CartContextProvider>
        <Navbar />
        <Switch>
          <Route path='/detailpage/:id' render={(props) => <DetailsPage handler={scrollHandler} {...props}/>} />
          <Route path='/cart' component={CartPage} />
          <Route path='/' component={CardContainer} />
        </Switch>
      </CartContextProvider>
    </ProductContextProvider>
  );
}

export default App;
