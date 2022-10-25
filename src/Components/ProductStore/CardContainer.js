import React , {useContext } from 'react';
import Card from './Card';
import styled from './CardContainer.module.scss';
import {ProductContext} from '../../Context/ProductContextProvider';

const CardContainer = () => {

    const products = useContext(ProductContext);
    


    return (
        <div className={styled.cardsContainer}>
            {products.map((product) => <Card key={product.id} productData={product} />)}
        </div>
    );
};

export default CardContainer;