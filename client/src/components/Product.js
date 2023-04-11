import React from 'react';
import { Link } from 'react-router-dom';
import Rating from 'react-rating'
export default function Product({product}) {


  return (
    
      <div>
          
            <Link to={`product/${product._id}`}>
            <img src={product.image}  className='img-fluid img-se' />
            <h1 className='pro-name'>{product.name}</h1>
            
           
            <h1 className='pro-name'> <Rating
            style={{color:'orange'}}
  initialRating={product.rating}  
  emptySymbol="far fa-star"
  fullSymbol="fas fa-star"
  fractions={2}
  readonly={true} 
/> </h1>
            <h1 className='pro-name'>Price: {product.price}</h1>
            </Link>
          
            </div>
    
  );
}
