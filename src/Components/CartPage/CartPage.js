import React , {useContext} from 'react';

//Components
import CartItem from './CartItem';
import InfoSection from './InfoSection';

//Cart Context
import { CartContext } from '../../Context/CartReducerContext';

//Styles
import styled from './CartPage.module.scss';



const CartPage = () => {

  const { cartReducer } = useContext(CartContext);

  return (
    <div className={styled.container}>
      <div className={styled.cartContainer}>
        {cartReducer.selectedItems.map(product => <CartItem key={product.id} productData={product} />)}
      </div>
      <InfoSection />
    </div>
  );
};

export default CartPage;