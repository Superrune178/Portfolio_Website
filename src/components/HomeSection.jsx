import PopupModel from './PopupModel';
import React, { useState, forwardRef } from 'react';


const HomeSection = forwardRef((props, ref) => {

    const { sectionRefs } = props;
    const scrollToSection = (sectionRef) => {
        if (sectionRef.current) {
            window.scrollTo({
                top: sectionRef.current.offsetTop,
                behavior: 'smooth'
            });
        }
    }

    function handleClick() {
        window.open('/Rounald_Andrawes_Software_Resume.pdf', '_blank');
    }

    return (
        <div className='block bg-black h-fit text-white items-center justify-center relative' ref={ref}>
            <div className='flex items-center relative w-full h-[550px] bg-black' id='container'>
                {/* PROFILE PIC AND BANNER */}
                <div className='flex w-full bg-accent items-center justify-center absolute top-[190px]' id='bar2'>
                    <div className='flex w-full items-center justify-center border-y-2 border-black' id='bar'>
                        <div className='circle flex overflow-hidden bg-white rounded-full justify-center border-accent border-8 '>
                            <img src="/profile-pic.png" alt='Profile Pic' className='profile-img' />
                        </div>
                    </div>
                </div>
            </div>
            {/* INFORMATION */}
            <div className='block h-fit text-center items-center justify-center'>
                <div className='h1'>
                    Hi! I am Rounald
                </div>
                <p className='description'>
                    I&apos;m a passionate Full Stack Web Developer based in Toronto, Ontario, with expertise in the MERN stack. Beyond my proficiency with MongoDB, Express, React, and Node.js, I also bring to the table hands-on experience with Python. I craft dynamic and responsive web solutions tailored to your needs. Currently on the lookout for a full-time developer position, I&apos;m eager to contribute to a team that values innovative thinking and top-tier web development. Let&apos;s build something great together!
                </p>
            </div>
            <div className='flex justify-center mt-4 gap-4'>
                <button
                    className='btn bg-accent rounded-2xl px-4 lg:text-xl sm:text-lg'
                    onClick={handleClick}
                >
                    Resume
                </button>
                <a
                    href='#contact'
                    onClick={(e) => { e.preventDefault(); scrollToSection(sectionRefs.contact); }}
                    className='flex btn bg-accent rounded-2xl px-4 py-[10px] lg:text-xl sm:text-lg'
                >Contact</a>
            </div>
        </div>
    );
});

HomeSection.displayName = 'HomeSection';

export default HomeSection;
