import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../actions/userActions'
import Error from './../components/Error';
import Loader from './../components/Loader';

function Loginscreen() {

    const loginreducer = useSelector(state => state.loginReducer)
    const { loading, error } = loginreducer
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const dispatch = useDispatch()

    const divStyles = {
        boxShadow: '1px 2px 9px #F4AAB9',
        margin: '4em',
        padding: '1em',
      };

    function login(e) {

        e.preventDefault()

        const user = {

            email: email,
            password: password
        }

        dispatch(loginUser(user))


    }

    useEffect(() => {

        if (localStorage.getItem('currentUser')) {

            window.location.href = '/'
        }
    }, []);
    return (
        <div className='row'>
            <div className='container'>
            <div className="row nav-bg">
                <div className='pd_tp'><h3>Login to Your Account</h3></div>
                
            <div className='row' style={{justifyContent:'right',marginRight:'70px'}}>
                
                <div className="col-md-4 card p-5 card-style" style={divStyles}>
                    <div>
                        {/* <h2 className='text-center m-3'>Login</h2> */}

                        {loading && (<Loader />)}
                        {error && (<Error error='Invalid Credentials' />)}

                        <form onSubmit={login}>

                            <input type="text" placeholder='Email Address' className='form-control' value={email} onChange={(e) => { setemail(e.target.value) }} required />
                            <input type="password" placeholder='Password' className='form-control' value={password} onChange={(e) => { setpassword(e.target.value) }} required />

                            <div>
                                <button type="submit" className='btn mt-3 btn_cls_1'>Login</button>
                            </div>
                        </form>


                    </div>
                    <a href="/register" className='mt-3 lk_cls'>Create Account</a>
                </div>
            </div>
            
        </div>
            </div>
          
      
       
        </div>
        
    );
}

export default Loginscreen;
