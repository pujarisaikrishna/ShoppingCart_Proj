import React from 'react';
import { useContext } from 'react';
import { CartContext } from './ContextProvider';
import CartProduct from './CartProduct'

const Cart = () => {

    const{ cart } = useContext(CartContext)
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-8'>
                    <h1>Product Details</h1>
                    {
                        cart.map(p =>(

                            <CartProduct key={p.id} product={p}/>
                        ))
                    }
                </div>
                <div className='col-4'>
                    <h1>Show Summary</h1>
                </div>
            </div>
            
        </div>
    );
}

export default Cart;
