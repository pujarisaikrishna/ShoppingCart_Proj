import React, { useContext } from 'react';
import { CartContext } from './ContextProvider';
import { type } from '@testing-library/user-event/dist/type';

const CartProduct = ({ product }) => {
    const{cart, dispatch} = useContext(CartContext)

    const Increase = (id) =>{
        const Index = cart.findIndex(p => p.id ===id)

        if(cart[Index].quantity < 10){
            dispatch({ type:"Increase", id:id })
        }
    }
    const Decrease = (id) =>{
        const Index = cart.findIndex(p => p.id ===id)

        if(cart[Index].quantity > 10){ 
            dispatch({ type:"Decrease", id:id })
        }
    }
    return (    
        <div className='d-flex border mt-4'>
            
            <img src={product.img} className="w-25 h-25" alt=''/>
            <div className='Details ms-4'>
                <h4> {product.title}</h4>
                <h5> {product.price}</h5>
                <div className="buttons">
                    <button className='rounded-circle px-2' onClick={ ()=> Decrease(product.id)}> <b> - </b> {" "} </button>
                    <button className='rounded px-2'> <b> {product.quantity} </b> {" "} </button>
                    <button className='rounded-circle px-2' onClick={ ()=> Increase(product.id)}> <b> + </b> {" "} </button>
                </div>
                <button className='btn btn-sm btn-warning mt-2' onClick={() => dispatch({ type: "Remove", id: product.id })}><b> Remove </b></button>
            </div>
        </div>
    );
}

export default CartProduct;
