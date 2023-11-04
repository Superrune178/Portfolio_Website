import React from 'react'

function CustomProject2() {
    const stack = ["python.png", "opencv.svg"]
    return (
        <div className='grid grid-cols-1 gap-4 border-2 border-accent rounded-3xl w-full h-fit sm:grid-cols-3 sm:p-8 sm:w-11/12 sm:mx-auto'>
            <div className='grid grid-cols-1 gap-4 w-full'>
                <img src="Project-images/FRS.webp" className='h-[300px] w-full rounded-lg' />
                <div className='flex w-full'>
                    <a
                        href="https://github.com/Superrune178/AI_Facial_Recognition"
                        target="_blank"
                        className='flex m-auto pt-3 btn bg-accent rounded-2xl px-4 lg:text-xl sm:text-lg'
                    >
                        Source Code
                    </a>
                </div>

            </div>
            <div className='col-span-2 block ml-4 sm:ml-8'>
                <div className='h2 text-red-800'>
                    Facial Recognition System
                </div>
                <div className=''>
                    This application is a facial recognition system designed to deliver high-precision identity verification. This powerful system integrates OpenCV&apos;s computer vision capabilities, the face_recognition library, and PySimpleGUI for a user-friendly interface. With a 99% accuracy rate, this app excels in identifying &apos;known&apos; users by cross-referencing facial features with a database of reference images and individual information. Key Features:
                </div>
                <ul className='list-disc ml-2 mr-2 sm:ml-8 sm:mr-2'>
                    <li className='list-item'>Rapid and accurate identification against comprehensive data of users.</li>
                    <li className='list-item'>Utilizes sophisticated algorithms for live face detection and image comparison.</li>
                    <li className='list-item'>Simple and intuitive GUI for easy operation and quick access to system features.</li>
                </ul>
                <div className='gap-4 flex m-3'>
                    {stack.map(image => (
                        <img key={image} src={`/${image}`} className='w-12 bg-white rounded-full sm:w-16 sm:mt-4' />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CustomProject2