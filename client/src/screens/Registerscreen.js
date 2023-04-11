import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerNewUser } from './../actions/userActions';
import Loader from './../components/Loader';
import Error from './../components/Error';
import Success from './../components/Success';

function Registerscreen() {

    const registerstate = useSelector(state => state.registerNewUserReducer)
    const { loading, success, error } = registerstate

    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [cpassword, setcpassword] = useState('')
    const dispatch = useDispatch()

    const divStyles = {
        boxShadow: '1px 2px 9px #F4AAB9',
        margin: '4em',
        padding: '1em',
      };

    function register(e) {

        e.preventDefault()

        const user = {
            name: name,
            email: email,
            password: password
        }

        if (password == cpassword) {
            dispatch(registerNewUser(user))
        }
        else {
            alert('passwords not matched')
        }

    }
    return (
        <div className='row'>
            <div className='container'>
            <div className="row nav-bg">
             <div className='pd_tp'><h3>Signup to Your Account</h3></div>
            <div className='row' style={{justifyContent:'right',marginRight:'70px'}}>
                <div className="col-md-4 card p-5 card-style" style={divStyles}>
                    <div>
                        {/* <h2 className='text-center m-3'>Register</h2> */}

                        <form onSubmit={register}>
                            {loading && (<Loader />)}
                            {success && (<Success success='Your Registration is successful' />)}
                            {error && (<Error error='Email Address is already registered' />)}
                            <input type="text" placeholder='Name' className='form-control' value={name} onChange={(e) => { setname(e.target.value) }} required />
                            <input type="text" placeholder='Email' className='form-control' value={email} onChange={(e) => { setemail(e.target.value) }} required />
                            <input type="password" placeholder='Password' className='form-control' value={password} onChange={(e) => { setpassword(e.target.value) }} required />
                            <input type="password" placeholder='Confirm Password' className='form-control' value={cpassword} onChange={(e) => { setcpassword(e.target.value) }} required />
                            <div className='btn_re'>
                                <button type="submit" className='btn mt-3 btn_cls_1'>Sign Up</button>
                            </div>
                        </form>

                    </div>
                    <a href="/login" className='mt-3 lk_cls'>Login</a>
                </div>
            </div>
            </div>
            </div>
        </div>
    );
}

export default Registerscreen;
