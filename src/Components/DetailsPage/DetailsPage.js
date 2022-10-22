import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../Context/ProductContextProvider";
import styled from "./DetailsPage.module.scss";
import { useParams } from "react-router-dom";

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
    products.forEach((element) => {
      if (element.id == params.id) {
        setData({
          title: element.title,
          description: element.description,
          price: element.price,
          category: element.category,
          imgSrc: element.image,
          rate: element.rating.rate,
        });
      };
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
