import axios from 'axios'
export const placeOrder = (token, subtotal) => (dispatch, getState) => {

    const currentUser = JSON.parse(localStorage.getItem('currentUser'))
    const cartItems = JSON.parse(localStorage.getItem('cartItems'))

    dispatch({ type: 'PLACE_ORDER_REQUEST' })

    axios.post('/api/orders/placeorder', { token, subtotal, currentUser, cartItems })
        .then((res) => {

            dispatch({ type: 'PLACE_ORDER_SUCCESS' })
            console.log(res.data)
        })
        .catch((err) => {
            dispatch({ type: 'PLACE_ORDER_FAILED' })
            console.log(err)
        })
}