import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterProducts } from './../actions/productActions';


function Filter() {

    const [searchkey, setsearchkey] = useState('')
    const [sort, setsort] = useState('popular')
    const [category, setcategory] = useState('all')
    const dispatch = useDispatch()

    function filter() {
        dispatch(filterProducts(searchkey, sort, category))
    }

    return (
        <div className='container'>
            <div className="row justify-content-center mt-3 mb-3">

                <div className="col-md-3">
                    <input type="text" placeholder='search products' className='form-control'
                        value={searchkey} onChange={(e) => { setsearchkey(e.target.value) }} />
                </div>
                <div className="col-md-2">
                    <select className='form-control mt-2'
                        value={sort} onChange={(e) => { setsort(e.target.value) }}>
                        <option value="popular">Popular</option>
                        <option value="htl">High to Low</option>
                        <option value="lth">Low to High</option>
                    </select>
                </div>
                <div className="col-md-2">
                    <select className='form-control mt-2'
                        value={category} onChange={(e) => { setcategory(e.target.value) }}>
                        <option value="all">All</option>
                        <option value="electronics">Electronics</option>
                        <option value="mobiles">Mobiles</option>
                        <option value="games">Games</option>

                    </select>
                </div>
                <div className="col-md-3">
                    <button className='btn mt-2' onClick={filter}>Filter</button>
                </div>
            </div>
        </div>
    );
}

export default Filter;
