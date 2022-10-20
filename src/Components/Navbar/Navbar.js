import React from "react";
// import ShopCart from './ShopCart/ShopCart';
import styled from "./Navbar.module.scss";
// import { Link } from 'react-router-dom';
import CartIcon from '../../assets/shopIcon.svg';

const Navbar = () => {
  return (
    <div className={styled.navbar}>
      <a href="/" className={styled.productLink}>
        products
      </a>
      <div className={styled.shopCart}>
        <a href="/">
          <img alt="cart-pic" src={CartIcon}></img>
        </a>
        <span>0</span>
      </div>
    </div>
  );
};

export default Navbar;
