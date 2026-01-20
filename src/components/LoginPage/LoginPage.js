import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LoginContext } from '../../App';
import LoginPageWrapper from './LoginPageWrapper';


export default function LoginPage() {
    const { isLogin, setLogin } = useContext(LoginContext);
    const navigate = useNavigate();

    return (
        <LoginPageWrapper>
            <h1 className='display-1'>Sign In</h1>
            <button className='btn btn-primary'
                onClick={() => {
                    setLogin(true)
                    navigate("/")
                }}
            >
                Sign In
            </button>
        </LoginPageWrapper>
    )
}
