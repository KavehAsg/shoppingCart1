import React , { useContext } from "react";
// import { Link } from 'react-router-dom';

//Context
import { CartContext } from "../../Context/CartReducerContext";

//styles
import styled from "./Navbar.module.scss";

//icons
import CartIcon from '../../assets/shopIcon.svg';


const Navbar = () => {

  const { cartReducer } = useContext(CartContext);
  
  return (
    <div className={styled.navbar}>
      <a href="/" className={styled.productLink}>
        products
      </a>
      <div className={styled.shopCart}>
        <a href="/">
          <img alt="cart-pic" src={CartIcon}></img>
        </a>
        <span>{cartReducer.totalQuantity}</span>
      </div>
    </div>
  );
};

export default Navbar;
