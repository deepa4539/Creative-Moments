import axios from 'axios'
export const registerNewUser = (user) => dispatch => {


    dispatch({ type: 'USER_REGISTER_REQUEST' })

    axios.post('/api/users/register', user)
        .then((response) => {
            dispatch({ type: 'USER_REGISTER_SUCCESS' })
            window.location.href = '/login'
            console.log(response)
        })
        .catch((error) => {
            dispatch({ type: 'USER_REGISTER_FAILED', payload: error })
            console.log(error)
        })
}

export const loginUser = (user) => dispatch => {


    dispatch({ type: 'USER_LOGIN_REQUEST' })

    axios.post('/api/users/login', user)
        .then((response) => {
            dispatch({ type: 'USER_LOGIN_SUCCESS' })

            localStorage.setItem('currentUser', JSON.stringify(response.data))

            window.location.href = '/'
        })
        .catch((error) => {
            dispatch({ type: 'USER_LOGIN_FAILED', payload: error })
            console.log(error)
        })
}

export const logoutUser = () => dispatch => {

    localStorage.removeItem('currentUser')
    localStorage.removeItem('cartItems')

    dispatch({ type: 'USER_LOGOUT' })

    window.location.href = '/login'

}