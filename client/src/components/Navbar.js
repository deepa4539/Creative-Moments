import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dropdown } from 'react-bootstrap'
import { FaUserAlt } from "react-icons/fa";
import { logoutUser } from './../actions/userActions';

export default function Navbar() {


  const cartReducer = useSelector(state => state.cartReducer)
  const { cartItems } = cartReducer
  const dispatch = useDispatch()
  const currentUser = JSON.parse(localStorage.getItem('currentUser'))


  return (
    <div className="nav-bg">
      <nav className="navbar navbar-expand-lg">
        {/* <a className="navbar-brand" href="/">SHEY SHOP</a> */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {currentUser ? (<Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <FaUserAlt />  {currentUser.name}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {/* <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                <Dropdown.Item href="/orders">Orders</Dropdown.Item> */}
                <Dropdown.Item onClick={() => { dispatch(logoutUser()) }}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>) : (<li className="nav-item">
              <a className="nav-link nv_bk" href="/register">Signup</a>
            </li>)}

            <li className="nav-item">
              <a className="nav-link" href="/cart"><i className="fas fa-shopping-cart p-2"></i>{cartItems.length} </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
