import React, { forwardRef } from 'react'

const ExperianceSection = forwardRef((props, ref) => {
    return (
        <div className='bg-black h-96 text-white' ref={ref}>Experiance Section</div>
    );
});

export default ExperianceSection;