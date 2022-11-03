import React, { useContext } from 'react';

//Styles
import styled from './ItemCounter.module.scss';

//Cart Context
import { CartContext } from "../../Context/CartReducerContext";

//Helpers
import { isInCart, quantityCounter } from "../../helper/cardsFunctions";

//icon
import TrashIcon from "../../assets/trash.svg";


const ItemCounter = ({ id, productData }) => {

    const { cartReducer, cartDispatch } = useContext(CartContext);


    return (
        <div className={styled.counterSection}>

            {quantityCounter(cartReducer.selectedItems, id) === 1 &&
                <button className={styled.deleteItem} onClick={() => cartDispatch({ type: "REMOVE_ITEM", payLoad: productData })}>
                    <img src={TrashIcon} alt="pic"></img>
                </button>
            }

            {quantityCounter(cartReducer.selectedItems, id) > 1 &&
                <button className={styled.decreaseItem} onClick={() => cartDispatch({ type: "DECREASE", payLoad: productData })}>
                    -
                </button>
            }

            {quantityCounter(cartReducer.selectedItems, id) > 0 &&
                <span>{quantityCounter(cartReducer.selectedItems, id)}</span>
            }

            {isInCart(cartReducer, id) ?
                <button className={styled.addItem} onClick={() => cartDispatch({ type: "INCREASE", payLoad: productData })}>
                    +
                </button>
                :
                <button className={styled.addItem} onClick={() => cartDispatch({ type: "ADD_ITEM", payLoad: productData })}>Add Item</button>
            }
        </div>
    );
};

export default ItemCounter;