import React, { forwardRef } from 'react'
import { BsLinkedin, BsGithub } from "react-icons/bs"
import ContactForm from './ContactForm'

const ContactSection = forwardRef((props, ref) => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 bg-black h-fit text-white sm:px-36 py-4 px-4' ref={ref}>
            <div className='block py-4 sm:py-0'>
                <div className='h3 flex'>
                    Contact &nbsp;<div className='text-red-800'>Me</div>
                </div>
                <div className='text-xl py-8'>
                    Email: ronandrawes@gmail.com
                    <br /><br />
                    Phone #: (416)523-7570
                </div>
                <div className='flex text-accent w-1/4 justify-between'>
                    <a href='https://www.linkedin.com/in/rounald-riad-andrawes-674826245/' target="_blank">
                        <BsLinkedin size={32} />
                    </a>
                    <a href='https://github.com/Superrune178' target="_blank">
                        <BsGithub size={32} />
                    </a>
                </div>
            </div>
            <ContactForm />
        </div>
    );
});

export default ContactSection;