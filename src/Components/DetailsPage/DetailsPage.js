import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import { getProductDetail } from "../../Services/API";

import CardLoading from "../LoadingComponents/CardLoading";

//style
import styled from "./DetailsPage.module.scss";

const DetailsPage = () => {
  const params = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      setData(await getProductDetail(params.id));
    }
    fetchData();
  }, [params]);

  return (
    <div className={styled.detailPage}>
      {!data.id && <CardLoading />}
      {!!data.id &&
        <div className={styled.container}>
          <div className={styled.imgContainer}>
            <img src={data.image} alt="pic"></img>
          </div>
          <div className={styled.detailsContainer}>
            <div className={styled.texts}>
              <h2 className={styled.title}>{data.title}</h2>
              <span className={styled.category}>{data.category}</span>
              <p className={styled.description}>{data.description}</p>
            </div>
            <div className={styled.lables}>
              <span>{data.rating.rate}/5 &#11088;</span>
              <span>{data.price}$</span>
              <Link to='/'>back</Link>
            </div>
          </div>
        </div>
      }
    </div>

  );
};

export default DetailsPage;
