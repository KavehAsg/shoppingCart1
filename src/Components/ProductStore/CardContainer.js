import React, { useContext } from 'react';
import Card from './Card';
import styled from './CardContainer.module.scss';
import { ProductContext } from '../../Context/ProductContextProvider';
import CardLoading from '../LoadingComponents/CardLoading';

const CardContainer = () => {

    const products = useContext(ProductContext);


    return (
        <div className={styled.cardsContainer}>
            {products.length === 0 &&
                [...Array(3)].map((x, i) =>
                    <CardLoading key={i} />
                )
            }
            {products.length > 1 && products.map((product) => {
                return <Card key={product.id} productData={product} />
            })}
        </div>
    );
};

export default CardContainer;