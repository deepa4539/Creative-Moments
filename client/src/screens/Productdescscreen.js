import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getProductById } from '../actions/productActions'
import {addToCart} from '../actions/cartActions'
import Loader from './../components/Loader';
import Error from './../components/Error';
export default function Productdescscreen() {

  const { productid } = useParams();
  const dispatch = useDispatch()

  const[quantity,setquantity]=useState(1)
  const getproductbyidstate = useSelector(state => state.getProductByIdReducer)
  const { product, loading, error } = getproductbyidstate

  function addtocart() {
    
      dispatch(addToCart(product,quantity))
    
  }

  useEffect(() => {

    dispatch(getProductById(productid))
  }, [])


  return (
    <div>

      {
        loading ? (<Loader />) : error ? (<Error error='Something went wrong' />) : (

          <div className='row mt-4'>
            <div className='col-md-6'>
              <div className='card p-2 m-3'>
                <h5 className="txt-left">{product.name}</h5>
                <img src={product.image} className='img-fluid bigimg m-3 mx-auto' />
                <p className='txt-p'>{product.description}</p>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='m-2 txt-lft'>
                <h5>Price : {product.price}</h5>

                <hr />
                <h5>
                  Select Quantity
                </h5>
                <select value={quantity} onChange={(e)=>{setquantity(e.target.value)}}>
                  {[...Array(product.countInStock).keys()].map((x, i) => {


                    return (
                      <option value={i + 1}>{i + 1}</option>
                    )
                  })}
                </select>
                <hr />
                <button className='btn btn-dark bt_rgt' onClick={addtocart}>ADD TO CART</button>

              </div>
            </div>
          </div>
        )
      }





    </div>
  );
}
