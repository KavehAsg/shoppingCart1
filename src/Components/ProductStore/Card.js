import React, { useContext } from "react";
import { Link } from "react-router-dom";

//icon
import TrashIcon from "../../assets/trash.svg";

//style
import styled from "./Card.module.scss";

//cart Context
import { CartContext } from "../../Context/CartReducerContext";

// helpers
import { isInCart, quantityCounter } from "../../helper/cardsFunctions";

const Card = ({ productData }) => {
  const { title, image, price, category, id } = productData;

  const { cartReducer, cartDispatch } = useContext(CartContext);

  return (
    <div className={styled.card}>
      <div className={styled.imgContainer}>
        <img alt="img" src={image}></img>
      </div>

      <div className={styled.textContainer}>
        <p className={styled.title}>{title}</p>
        <span className={styled.category}>{category}</span>
        <span className={styled.price}>{price}$</span>
      </div>

      <div className={styled.btnContainers}>
        <Link to={`/detailpage/${id}`}>details</Link>
        <div className={styled.counterSection}>

          {quantityCounter(cartReducer.selectedItems, id) === 1 && 
            <button className={styled.deleteItem} onClick={() => cartDispatch({ type: "REMOVE_ITEM", payLoad: productData })}>
              <img src={TrashIcon} alt="pic"></img>
            </button>
          }

          {quantityCounter(cartReducer.selectedItems, id) > 1 && 
            <button className={styled.decreaseItem} onClick={() => cartDispatch({ type: "DECREASE", payLoad: productData })}>
              -
            </button>
          }

          {isInCart(cartReducer , id) ?
            <button className={styled.addItem} onClick={() => cartDispatch({ type: "INCREASE", payLoad: productData })}>
              +
            </button>
            :
            <button className={styled.addItem} onClick={() => cartDispatch({ type: "ADD_ITEM", payLoad: productData })}>Add Item</button>
          }
        </div>
      </div>
    </div>
  );
};

export default Card;
