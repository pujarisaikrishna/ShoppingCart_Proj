import React, { useContext } from 'react';
import { BsCart } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { CartContext } from './ContextProvider';

const Navbar = () => {

    const{cart} = useContext(CartContext) 

    return (
        <div className='d-flex justify-content-between bg-secondary py-3 px-5'>
            
           <Link to='/' className='nav-bar brand fs-5 text-white'> Shop</Link>
           <Link to='/cart' className='text-white navbar-link  fs-5'> <BsCart />{ cart.length }</Link> 

        </div>
    );
}

export default Navbar;
