import React , {useContext , useEffect} from 'react';
import Card from './Card';
import styled from './CardContainer.module.scss';
import ProductContextProvider from '../../Context/ProductContextProvider';

const CardContainer = () => {

    // const products = useContext(ProductContextProvider);


    return (
        <div className={styled.cardsContainer}>
            <Card title='phone' price={20} img="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" category='tech'/>
        </div>
    );
};

export default CardContainer;