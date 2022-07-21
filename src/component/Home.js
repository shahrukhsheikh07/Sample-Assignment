import React from 'react';
import Web from '../component/img1.png'
import Common from './Common';

const Home = () => {
    return (
        <>
        {/* Common is passing a props in home page  */}
        <Common name='Grow your business with' imgsrc={Web} visit='/service' btname='Get Started' />
        </>
    );
};

export default Home;