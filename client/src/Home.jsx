import React from 'react';
import LoginForm from './LoginForm';

const Home = () => {
    return (
        <>
            <div className='container'>
                <div className='d-flex mg-top'>
                    <img src="/images/logo.png" alt='logo' className='logo' />&nbsp;&nbsp;
                    <h3 className='text-info font-family'>Progress Pulse</h3>
                </div>
            </div>
            <div className='container'>
                <div className='d-flex mg-top'>
                    <div className='row'>
                        <div className='col'>
                            <img src="/images/home.jpg"
                                class="img-fluid homeImg" alt="" />
                        </div>
                        <div className='col'>
                            <div className='d-block'>
                                <p className='para-font'><span className="big">w</span>elcome to Progress Pulse, your daily companion for tracking employee performance and project progress. With our intuitive platform, stay informed about your team's daily activities and project developments effortlessly.</p>
                                <div className='box-padding'>
                                    <LoginForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;