import React , {useContext } from 'react';
import Card from './Card';
import styled from './CardContainer.module.scss';
import {ProductContext} from '../../Context/ProductContextProvider';

const CardContainer = () => {

    const products = useContext(ProductContext);
    


    return (
        <div className={styled.cardsContainer}>
            {products.map((item) => <Card key={item.id} title={item.title} price={item.price} category={item.category} img={item.image} />)}
        </div>
    );
};

export default CardContainer;