
import { addToCartReducer } from './../Reducer/cartReducer';
export const addToCart = (product, quantity) => (dispatch, getState) => {


    const cartItem = {

        name: product.name,
        image:product.image,
        _id: product._id,
        price: product.price,
        countInStock: product.countInStock,
        quantity: quantity
    }

    dispatch({ type: 'ADD_TO_CART', payload: cartItem })


    localStorage.setItem("cartItems", JSON.stringify(getState().cartReducer.cartItems));



}

export const deleteFromCart = (item) => dispatch => {

    dispatch({ type: 'DELETE_FROM_CART', payload: item })

}