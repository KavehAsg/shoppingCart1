import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { ProductContext } from "../../Context/ProductContextProvider";
import styled from "./DetailsPage.module.scss";

const DetailsPage = () => {
  const params = useParams();
  const products = useContext(ProductContext);
  const [data, setData] = useState({
    title: "",
    description: "",
    price: 0,
    category: "",
    imgSrc: "",
    rate: 0,
  });

  useEffect(() => {
    const selectedProduct = products.find((item) => item.id === Number(params.id) );
        setData({
          title: selectedProduct.title,
          description: selectedProduct.description,
          price: selectedProduct.price,
          category: selectedProduct.category,
          imgSrc: selectedProduct.image,
          rate: selectedProduct.rating.rate,
        });
  } , [params , products]);

  return (
    <div className={styled.detailPage}>
      <div className={styled.container}>
        <div className={styled.imgContainer}>
          <img src={data.imgSrc} alt="pic"></img>
        </div>
        <div className={styled.detailsContainer}>
          <div className={styled.texts}>
            <h2 className={styled.title}>{data.title}</h2>
            <span className={styled.category}>{data.category}</span>
            <p className={styled.description}>{data.description}</p>
          </div>
          <div className={styled.lables}>
            <span>{data.rate}/5 &#11088;</span>
            <span>{data.price}$</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
