import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }

    const handleRegister = event => {
        event.preventDefault();
        // console.log(event.target.email.value);
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

    }
    return (
        <div className='register-form'>
            <h2 style={{ textAlign: 'center' }}>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder="Enter Your Name" required />

                <input type="email" name="" id="" placeholder="Enter Your Email" required />

                <input type="password" name="" id="" placeholder="Enter Your Password" required />
                <input type="submit" value="Register" />
            </form>
            <p>Already Have an Account ? <Link to="/login" className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please go to Login Page</Link></p>
        </div>
    );
};

export default Register;