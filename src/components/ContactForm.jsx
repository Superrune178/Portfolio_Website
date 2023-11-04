import React, { useRef, useState } from 'react'
import { AnimatePresence, motion } from "framer-motion";
import emailjs from '@emailjs/browser'
import { Notification } from './Notifications';

function ContactForm() {

    const form = useRef();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [notification, setNotification] = useState(null);

    const removeNotif = () => {
        setNotification(null);
    };

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm("service_l7oznnd", "template_chac6ug", form.current, "lrWTD82be3RS5dy7B")
            .then((response) => {
                setNotification("Email Sent Successfully", response);
                setName('');
                setEmail('');
                setMessage('');
            }).catch((err) => {
                setNotification('Error sending email: ', err);
            });
    }
    return (
        <>
            <form className='block text-white' ref={form} onSubmit={sendEmail}>
                <input
                    type='text'
                    name='from_name'
                    className='w-full rounded-xl border-4 border-accent mb-2 sm:mb-4 text-md sm:text-lg bg-transparent p-2'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder='Name' />
                <input
                    type='email'
                    name='user_email'
                    className='w-full rounded-xl border-4 border-accent mb-2 sm:mb-4 text-md sm:text-lg bg-transparent p-2'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder='Email' />
                <textarea
                    name='message'
                    rows={5}
                    className='w-full rounded-xl border-4 border-accent mb-2 sm:mb-4 text-md sm:text-lg bg-transparent p-2'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    autoCorrect='on'
                    placeholder='Message' />
                <button type='submit' className='btn w-1/4 rounded-xl'>Send</button>
            </form>
            <AnimatePresence>
                {notification && (
                    <Notification text={notification} removeNotif={removeNotif} />
                )}
            </AnimatePresence>
        </>
    )
}

export default ContactForm