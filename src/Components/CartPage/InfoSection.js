import React , { useContext } from 'react';
import { Link } from 'react-router-dom';

//Cart Context
import { CartContext } from '../../Context/CartReducerContext';

//Styles
import styled from './InfoSection.module.scss';

const InfoSection = () => {

    const { cartReducer, cartDispatch } = useContext(CartContext);

    return (
        <div className={styled.container}>
            <h1>Purchase?</h1>
            <div className={styled.details}>
                <p>Total Quantity: {cartReducer.totalQuantity}</p>
                <p>Total Price: {cartReducer.totalPrice} $</p>
            </div>
            <div className={styled.buttons}>
                <button onClick={() => cartDispatch({type: "CLEAR_ALL" })}>Clear all</button>
                <button onClick={() => cartDispatch({type: "CHECK-OUT" })}>Check Out</button>
                <button onClick={() => console.log(cartReducer)}>Check</button>
            </div>
            <Link to='/'>back to store</Link>
        </div>
    );
};

export default InfoSection;