import React from "react";
import ProductContextProvider from "./Context/ProductContextProvider";
import Navbar from "./Components/Navbar/Navbar";
import CardContainer from "./Components/ProductStore/CardContainer";
import CartReducerContext from "./Context/CartReducerContext";
import DetailsPage from "./Components/DetailsPage/DetailsPage";
import { Route , Switch} from 'react-router-dom';

function App() {
  return (
    <ProductContextProvider>
      <CartReducerContext>
        <Navbar />
        <Switch>
          <Route path='/detailpage/:id' component={DetailsPage}/> 
          <Route path='/' component={CardContainer}/>
        </Switch>
      </CartReducerContext>
    </ProductContextProvider>
  );
}

export default App;
