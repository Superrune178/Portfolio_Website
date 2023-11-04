import React from 'react'

function Projects({ image, link, github, title, stack, description, features, direction }) {
    if (direction === "left") {
        return (
            <div className='grid grid-cols-1 gap-4 border-2 border-accent rounded-3xl w-full h-fit sm:grid-cols-3 sm:p-8 sm:w-11/12 sm:mx-auto'>
                <div className='grid grid-cols-1 gap-4 w-full'>
                    <img src={`/Project-images/${image}`} className='h-[300px] w-full rounded-lg' />
                    <div className='flex w-full'>
                        <a
                            href={link}
                            target="_blank"
                            className='flex m-auto pt-3 btn bg-accent rounded-2xl px-4 lg:text-xl sm:text-lg'
                        >
                            Live Project
                        </a>
                        <a
                            href={github}
                            target="_blank"
                            className='flex m-auto pt-3 btn bg-accent rounded-2xl px-4 lg:text-xl sm:text-lg'
                        >
                            Source Code
                        </a>
                    </div>

                </div>
                <div className='col-span-2 block ml-4 sm:ml-8'>
                    <div className='h2 text-red-800'>
                        {title}
                    </div>
                    <div className=''>
                        {description}
                    </div>
                    <ul className='list-disc ml-2 mr-2 sm:ml-8 sm:mr-2'>
                        {features.map(feature => {
                            return <li className='list-item' key={feature}>{feature}</li>
                        })}
                    </ul>
                    <div className='gap-4 flex m-3'>
                        {stack.map(image => (
                            <img key={image} src={`/${image}`} className='w-12 bg-white rounded-full sm:w-16 sm:mt-4' />
                        ))}
                    </div>
                </div>
            </div>
        )
    } else if (direction === "right") {
        return (
            <div className='grid grid-cols-1 gap-4 border-2 border-accent rounded-3xl w-full h-fit sm:grid-cols-3 sm:p-8 sm:w-11/12 sm:mx-auto'>
                <div className='col-span-2 block ml-4 sm:mr-8'>
                    <div className='h2 text-red-800'>
                        {title}
                    </div>
                    <div className=''>
                        {description}
                    </div>
                    <ul className='list-disc ml-2 mr-2 sm:ml-8 sm:mr-2'>
                        {features.map(feature => {
                            return <li className='list-item' key={feature}>{feature}</li>
                        })}
                    </ul>
                    <div className='gap-4 flex m-3'>
                        {stack.map(image => (
                            <img src={`/${image}`} key={image} className='w-12 bg-white rounded-full sm:w-16 sm:mt-4' />
                        ))}
                    </div>
                </div>
                <div className='grid grid-cols-1'>
                    <img src={`/Project-images/${image}`} className='h-[300px] w-full rounded-lg' />
                    <div className='flex w-full my-4'>
                        <a
                            href={link}
                            target="_blank"
                            className='flex m-auto pt-3 btn bg-accent rounded-2xl px-4 lg:text-xl sm:text-lg'
                        >
                            Live Project
                        </a>
                        <a
                            href={github}
                            target="_blank"
                            className='flex m-auto pt-3 btn bg-accent rounded-2xl px-4 lg:text-xl sm:text-lg'
                        >
                            Source Code
                        </a>
                    </div>

                </div>
            </div>
        )
    }
}

export default Projects