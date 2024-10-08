import React from 'react';
import Data from '../data/Data.json';
import Product from './Product'
import { useState } from 'react';

const Products = () => {
      const[ products, setProducts] = useState(Data.products)
    return (
        <div className='container mt-5'>
            <div className='row row-cols-1 row-cols-md-3 g-4'>
                {
                    products.map(p => (
                        
                        <Product product={p}/>
                    ))
                }
            </div>
            
        </div>
    );
}

export default Products;
