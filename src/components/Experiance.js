import React, { useState } from 'react'

const data = [
    {
        id: 1,
        date: "Apr 2022",
        title: "Ontario Tech University",
        subTitle: "Bachelor of Software Engineering",
        description: ["Object Oriented Programming and Design",
            "Web Programming",
            "Data Structures",
            "Computer Networks",
            "Introduction to Artificial Intelligence",
            "Operating Systems",
            "User Interface",
            "System Programming",
            "Software Design and Architecture",
            "Design and Analysis of Algorithms",
            "Embedded Systems",
            "Distributed Systems"],
    },
    {
        id: 2,
        date: "Apr 2023 - July 2023 ",
        title: "Grace I.T. Inc",
        subTitle: "Software Engineer",
        description: ["Collaborated with a team of developers to design and implement cutting-edge software solutions, ensuring efficient, scalable, and robust applications.",
            "Played a pivotal role in the full software development life cycle, from concept design to deployment, ensuring projects met quality and timeline expectations.",
            "Leveraged Python and Django frameworks to build and maintain backend services, enhancing the company's software capabilities and bringing innovation to web application functionalities.",
            "Utilized HTML, CSS, and JavaScript to create intuitive and responsive user interfaces, ensuring a seamless user experience and facilitating client satisfaction.",
            "Managed databases using MSSQL, performing tasks including schema design, data querying, and ensuring data integrity.",
            "Actively used GitHub as a version control platform, maintaining codebase integrity, and ensuring smooth and organized code deployments.",
            "Regularly participated in team meetings, code reviews, and brainstorming sessions, contributing valuable insights and ensuring the highest quality software delivery."]

    },
    {
        id: 3,
        date: "Aug 2023 - Current",
        title: "Freelance Web Developer",
        subTitle: "Self-Employed",
        description: ["Provided freelance web development services to diverse companies, ranging from startups to established businesses, delivering tailor-made solutions that aligned with their specific needs and objectives.",
            "Designed and developed a range of projects, from basic company websites ensuring a strong online presence, to intricate web applications offering rich functionalities and enhanced user experiences.",
            "Utilized the MERN stack (MongoDB, Express.js, React, Node.js) to create scalable, high-performance, and efficient web applications, ensuring seamless backend and frontend integration.",
            "Leveraged Next.js to build server-rendered React applications, improving web performance and ensuring optimal search engine optimization.",
            "Incorporated Tailwind CSS for rapid UI development, producing responsive and modern designs that resonated with the clients' brand identity and attracted end-users.",
            "Employed Styled Components to write CSS styles with JavaScript, promoting dynamic component styling and enhancing reusability across different components.",
            "Continuously kept up with the latest trends, technologies, and libraries in the web development realm, ensuring delivery of state-of-the-art solutions and exceeding client expectations.",
            "Managed end-to-end project lifecycles, including requirement gathering, design, development, testing, deployment, and post-launch support, ensuring timely delivery and client satisfaction.",
            "Collaborated closely with clients, conducting regular feedback sessions and iterative development to ensure the final product aligned perfectly with their vision and business objectives."]
    },
];

function Experiance() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % data.length);
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + data.length) % data.length);
    };

    const renderSlide = (slideData) => {
        if (slideData.id === 1) {
            return (
                <div className='scrollEdited text-white w-full overflow-y-auto h-fit sm:h-[380px]'>
                    <div className='text-4xl mb-3'>{slideData.title}</div>
                    <div className='text-2xl'>{slideData.subTitle}</div>
                    <div className='text-xl opacity-50 mb-3'>{slideData.date}</div>
                    <div>Relevant Courses Taken:</div>
                    <div className='grid grid-cols-1 sm:grid-cols-3 border border-t-0 border-l-0 mb-3 ml-2 mr-2 sm:ml-8 sm:mr-2'>
                        {slideData.description.map(item => (
                            <div className='border px-1' key={item}>{item}</div>
                        ))}
                    </div>
                </div>)
        } else {
            return (
                <div className='scrollEdited text-white w-full overflow-y-auto h-fit sm:h-[380px]'>
                    <div className='text-4xl mb-3'>{slideData.title}</div>
                    <div className='text-2xl'>{slideData.subTitle}</div>
                    <div className='text-xl opacity-50 mb-3'>{slideData.date}</div>
                    <ul className='list-disc ml-2 mr-2 sm:ml-8 sm:mr-2'>
                        {slideData.description.map(item => (
                            <li className='list-item ' key={item}>{item}</li>
                        ))}
                    </ul>
                </div>)
        }
    };

    return (
        <div className='ml-3 w-full sm:w-[820px] h-fit'>
            <div className='flex mb-4'>
                <button
                    onClick={prevSlide}
                    className=''
                    style={{ color: '#511C2D' }}
                >
                    <i className="arrow left" />
                </button>

                <div className='h-fit sm:h-[380px] w-full sm:mr-2'>
                    {renderSlide(data[currentSlide])}
                </div>
                <button
                    onClick={nextSlide}
                    className=''
                    style={{ color: '#511C2D' }}
                >
                    <i className="arrow right" />
                </button>
            </div>
            <div className="indicators">
                {data.map((_, idx) => (
                    <div
                        key={idx}
                        className={`indicator ${idx === currentSlide ? 'active' : ''}`}
                        style={{ backgroundColor: idx === currentSlide ? '#511C2D' : 'white' }}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default Experiance