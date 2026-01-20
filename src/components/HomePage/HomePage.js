import React, { useContext } from 'react';
import HomePageWrapper from "./HomePageWrapper"
import { Link } from 'react-router-dom';
import { LoginContext } from '../../App';

export default function HomePage() {
    const { isLogin, setLogin } = useContext(LoginContext);

    return (
        <HomePageWrapper>
            <h1 className='display-1'>Welcome Express24</h1>
            <div className='d-flex'>
                {
                    isLogin && <Link className='btn btn-primary' to='dashboard'>Dashboard</Link>
                    || <Link className='btn btn-primary me-2' to='login'>Sign In</Link>
                }
            </div>
        </HomePageWrapper>
    )
}
