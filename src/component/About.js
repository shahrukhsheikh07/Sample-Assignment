import React from 'react';
import Web from '../component/img2.png'
import Common from './Common';

const About = () => {
    return (
        <>
        {/* Common is passing a props in About page  */}
       <Common name='Welcome to About page' imgsrc={Web} visit='/contact' btname='Contact Now' />
       </>
    );
};

export default About;