import React from 'react';
import LoginForm from '../forms/LoginForm';

const Home = () => {
    return (
        <>
            <div className='container'>
                <div className='d-flex mg-top'>
                    <img src="/images/settings.png" alt='logo' className='logo' />&nbsp;&nbsp;
                    <h3 className='text-color font-family'>Progress Pulse</h3>
                </div>
            </div>
            <div className='container'>
                    <div className='row mg-top'>
                        <div className='col'>
                            <div className='outer-box'>
                                <h4 className='text-white'>The simplest way to manage your workforce </h4>
                                <p className='para-font text-white'>Enter your credentials to access your account</p>
                            <img src="/images/homedash.png" className="img-fluid dashImg" alt="" />
                            <img src="/images/homedash.png" className="img-fluid dashImg position-absolute top-50 end-50" alt="" />
                            </div>
                        </div>
                        <div className='col'>
                                <div className='box-padding'>
                                    <LoginForm />
                                </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Home;