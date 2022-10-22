import React from "react";
import styled from "./Card.module.scss";
import { Link } from "react-router-dom";

const Card = (props) => {
    const {title , img , price , category , id} = props;
  return (
    <div  className={styled.card}>

      <div className={styled.imgContainer}>
        <img alt="img" src={img}></img>
      </div>

      <div className={styled.textContainer}>
        <p className={styled.title}>{title}</p>
        <span className={styled.category}>{category}</span>
        <span className={styled.price}>{price}$</span>
      </div>

        <div className={styled.btnContainers}>
            <Link to={`/detailpage/${id}`}>details</Link>
            <div className={styled.counterSection}>
                <button className={styled.plus}>+</button>
            </div>
        </div>

    </div>
  );
};

export default Card;
