import React from 'react';
import './signin.css';
import Header from './Header';

const Signin = () => {
    return (
        <div className='signin'>
            <Header />
            <div className='signinbox'>
                <div className='box'>
                    <h3><b>TicketRegistartions.Org</b></h3>
                    <h3>Welcome's You</h3>
                    <hr/>
                    <label><b>User Name</b></label>
                    <input type="text" className='form-control input' placeholder='Enter User Name' name='userName'/>
                    <br/><label><b>Password</b></label>
                    <input type="password" className='form-control input' placeholder='Enter Password' name='password'/>
                    <br/><br/><a href='/notFound'>Forgot password ?.</a>
                    <button className='btn btn-primary'>Log In</button>
                </div>
            </div>


        </div>
    )
}

export default Signin