import React from 'react';
import StripeCheckout from 'react-stripe-checkout'
import { useDispatch } from 'react-redux';
import { placeOrder } from './../actions/orderActions';


function Checkout({ amount }) {

    const dispatch = useDispatch()

    function tokenHandler(token) {
        dispatch(placeOrder(token, amount))
    }
    return (
        <div>

            <StripeCheckout
                token={tokenHandler}
                amount={amount * 100}
                shippingAddress
                billingAddress
                currency='INR'
                stripeKey='pk_test_51KbeaZSHGT3iAvkWguOzEJgL4r6mxgrQQD8WWylb0J23udgcSO70B7YiDR8GjeFgSzzfFCgu7an6wTvFxGbzH2uY00H03tLU39'
            >

                <button className='btn mb-3'>PAY NOW</button>
            </StripeCheckout>

        </div>
    );
}

export default Checkout;
