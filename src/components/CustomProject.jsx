import React, { useState } from 'react';


function CustomProject() {
    const stack = ["html.png", "css.png", "bootstrap.png", "jquery.png", "plotly.png", "django.png", "yfinance.png", "sqlite.png"]

    const [showVideo, setShowVideo] = useState(false);
    return (
        <div className='grid grid-cols-1 gap-4 border-2 border-accent rounded-3xl w-full h-fit sm:grid-cols-3 sm:p-8 sm:w-11/12 sm:mx-auto'>
            <div className='col-span-2 block ml-4 sm:mr-8'>
                <div className='h2 text-red-800'>
                    StockStrategist
                </div>
                <div className=''>
                    StockStrategist is a dynamic web application designed for both novice and experienced investors looking to make informed stock market decisions. It combines the core technologies of HTML, CSS, and Bootstrap for front-end development, with jQuery for interactive functionality, and Plotly for advanced data visualization. The application runs on a Django framework, ensuring a strong, scalable back-end with data managed by SQLite. Stock analysis is enriched with real-time data from yFinance, offering users comprehensive insights into stock performance. Features of StockStrategist include:
                </div>
                <ul className='list-disc ml-2 mr-2 sm:ml-8 sm:mr-2'>
                    <li className='list-item'>Personal account creation for a customized experience.</li>
                    <li className='list-item'>Real-time stock lookup to stay updated with market changes.</li>
                    <li className='list-item'>Option to favorite stocks, enabling users to monitor selected stocks closely.</li>
                    <li className='list-item'>Historical stock data visualization over the past decade via line and candlestick graphs.</li>
                    <li className='list-item'>AI neural network predictions for short-term stock price movements.</li>
                    <li className='list-item'>Access to long-term prediction strategies for actionable buy, sell, or hold recommendations.</li>
                </ul>
                <div className='gap-4 flex m-3 flex-wrap h-fit'>
                    {stack.map(image => (
                        <img key={image} src={`/${image}`} className='w-12 h-auto bg-white rounded-full sm:w-16 sm:mt-4' />
                    ))}
                </div>
                <div className='text-2xl text-red-700'>
                    Unfortunately, due to a recent yfinance library update, some of the functions of the library are temporarily down. For that reason, I will not be linking the live website since the project does not currently work. I hope the video provides enough of a demonstration. Thank You!
                </div>
            </div>
            <div className='grid grid-cols-1'>
                {showVideo ? (
                    <div className="video-popup">
                        <video width="80%" height="80%" controls autoPlay>
                            <source src="Application-Run-through.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <button className="close-btn" onClick={() => setShowVideo(false)}>Close</button>
                    </div>
                ) : (
                    <>
                        <img
                            src="/Project-images/stockstrat.webp"
                            className='h-[300px] w-full rounded-lg'
                            onClick={() => setShowVideo(true)}
                            style={{ cursor: 'pointer' }}
                        />
                        <div className="video-play-btn">Click the Image to play video demonstration</div>
                    </>
                )}
                <div className='flex w-full my-4'>
                    <a
                        href="https://github.com/Superrune178/StockStrategist"
                        target="_blank"
                        className='flex m-auto pt-3 btn bg-accent rounded-2xl px-4 lg:text-xl sm:text-lg'
                    >
                        Source Code
                    </a>
                    <a
                        href="https://github.com/ranaroussi/yfinance/issues/1729"
                        target="_blank"
                        className='flex m-auto pt-3 btn bg-accent rounded-2xl px-4 lg:text-xl sm:text-lg'
                    >
                        Error Page
                    </a>
                </div>

            </div>
        </div>
    )
}

export default CustomProject