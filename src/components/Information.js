import React from 'react'

function Information() {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-3 ml-0 w-full sm:w-[820px] h-fit sm:ml-6 items-center'>
            <div className='col-span-1 sm:col-span-2'>
                <div className='h2'>
                    About Me
                </div>
                <div className='mb-3 text-lg'>
                    Hey there! I'm Rounald Andrawes, a tech enthusiast living in Toronto, ON, Canada. Originally I'm from Egypt, I've called Canada home for over 15 years now. My journey into the world of coding began in grade 11 during a Computer Science course, and I've been hooked ever since.
                </div>
                <div className='text-lg'>
                    When I'm not diving deep into code, you'll probably find me taking care of my body at the gym, in a thrilling video game, or playing a fierce match of volleyball, tennis, or soccer. Being the eldest of three boys, I've naturally cultivated a sense of responsibility and leadership over the years. This translates well into my professional life too, as I thoroughly enjoy collaborating within a team and directly with clients. Looking forward to creating something great together!
                </div>
            </div>
            <div className='col-span-1'>
                <img src='/About_img.jpeg' className='w-3/4 h-auto m-auto rounded-xl' />
            </div>
        </div>
    )
}

export default Information