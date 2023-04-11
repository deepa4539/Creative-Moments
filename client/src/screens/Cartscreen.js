import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, deleteFromCart } from '../actions/cartActions';
import Checkout from '../components/Checkout';
import { cartReducer } from './../Reducer/cartReducer';

export default function Cartscreen() {

    const cartreducerstate = useSelector(state => state.cartReducer)
    const dispatch = useDispatch()
    const { cartItems } = cartreducerstate

    var subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0)
    useEffect(() => {

        localStorage.setItem('cartItems', JSON.stringify(cartItems))
    }, [cartItems])

    return (
        <div>
            <div className='row justify-content-center mt-5'>
                <div className='col-md-8 card'>
                    <table className="table table-bordered mt-2">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total Price</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item) => {
                                return (
                                    <tr>
                                        <td><img src={item.image} className='img-fluid img-sm' /></td>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                        <td><select value={item.quantity} onChange={(e) => { dispatch(addToCart(item, e.target.value)) }}>
                                            {[...Array(item.countInStock).keys()].map((x, i) => {
                                                return (
                                                    <option value={i + 1}>{i + 1}</option>
                                                )
                                            })}
                                        </select></td>
                                        <td>{item.quantity * item.price}</td>
                                        <td><i class="fa-regular fa-trash-can" onClick={() => { dispatch(deleteFromCart(item)) }}></i></td>
                                    </tr>
                                )
                            })}
                        </tbody>

                    </table>
                    <hr />
                    <h1>Subtotal : {subtotal} RS/-</h1>
                    <hr />
                    <Checkout amount={subtotal} />
                </div>
            </div>
        </div>
    );
}
