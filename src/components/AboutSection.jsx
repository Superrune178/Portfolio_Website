import React, { forwardRef } from 'react'
import TechTree from './TechTree';
import Technologies from './Technologies';

const AboutSection = forwardRef((props, ref) => {
    return (
        <div className='bg-black text-white h-fit py-36 sm:pb-0'>
            <div className='bg-black  text-white' ref={ref}></div>
            <Technologies />
        </div>
    )
});

export default AboutSection