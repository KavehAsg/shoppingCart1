import React , { useContext , useEffect }from "react";
import { Link } from "react-router-dom";

//style 
import styled from "./Card.module.scss";

//cart Context
import {ReducerContext} from '../../Context/CartReducerContext';

const Card = ({productData}) => {
    const {title , image , price , category , id} = productData;
    
    const {cartReducer , cartDispatch} = useContext(ReducerContext);

    // useEffect(() => {
    //   console.log(cartReducer);
    // } , [cartReducer])

  return (
    <div  className={styled.card}>

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
                <button className={styled.plus} onClick={() => cartDispatch({type: 'ADD_ITEM' , payLoad: productData })}>{cartReducer.selectedItems.find(item => item.id === id) ? '+' : 'Add to Cart'}</button>
            </div>
        </div>

    </div>
  );
};

export default Card;
