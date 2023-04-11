
import { getAllProductsReducer, getProductByIdReducer } from "./Reducer/ProductReducer";
import { cartReducer } from './Reducer/cartReducer';
import { combineReducers } from 'redux'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import { loginReducer, registerNewUserReducer } from './Reducer/userReducer';
import { placeOrderReducer } from './Reducer/orderReducer';

const finalReducer = combineReducers({

  getAllProductsReducer: getAllProductsReducer,
  getProductByIdReducer: getProductByIdReducer,
  cartReducer: cartReducer,
  registerNewUserReducer: registerNewUserReducer,
  loginReducer: loginReducer,
  placeOrderReducer: placeOrderReducer
})

const initialStore = {
  cartReducer: {
    cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
  },
  loginReducer: {
    currentUser: localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null
  }
}

const composeEnhancers = composeWithDevTools({
});
const store = createStore(finalReducer, initialStore, composeEnhancers(
  applyMiddleware(thunk)

))
export default store