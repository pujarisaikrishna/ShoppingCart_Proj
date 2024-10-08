import React, { useContext } from 'react';
import { CartContext } from './ContextProvider';

const Product = ({ product }) => {
    const { dispatch } = useContext(CartContext)

    return (
        <>
           <div className='col'>
            <div className='card h-100'>
                <img class='card-img-top' src={product.img} alt="Card image cap" />
                <div class='card-body'>
                    <h5 class="card-title"> {product.title}</h5>
                    <h4> ${product.price}</h4>
                    <button class="btn btn-primary" onClick={() => dispatch({ type:"Add", product: product })}>Add to Cart</button>
                </div>
            </div>
            
           </div>
        </>   
    );
}

export default Product;
