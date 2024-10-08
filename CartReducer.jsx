import React from 'react';


const CartReducer = (state, action) => {

    switch(action.type) {
        case 'Add':
           return[...state, action.product]
        case 'Remove':
            return state.filter(p => p.id != action.id)
        case 'Increase':
            const IndexI = state.findIndex(p => p.id === action.id)
            state[IndexI].quantity += 1
            return[...state]
        case 'Decrease':
            alert('hello')
            const IndexD = state.findIndex(p => p.id === action.id)
            state[IndexD].quantity -= 1
            return[...state]                                                

        default: 
            return state
    } 

    return (
        <div>
            
        </div>
    );
}

export default CartReducer;
