import React, { forwardRef } from 'react'
import Projects from './Projects';
import CustomProject from './CustomProject';
import CustomProject2 from './CustomProject2';

const ProjectSection = forwardRef((props, ref) => {
    const interacinn = {
        description: "InteracInn is a minimalist social media clone that brings to life the essential features of digital networking. Built on a robust full stack using MongoDB, Express.js, React, and Node.js, it delivers a responsive and intuitive user experience, crafted with Material UI and managed by Redux Toolkit. Some features are: ",
        features: ["Account creation with secure authentication", "Real-time posting and content sharing capabilities", "Ability to add and manage friendships", "Photo upload feature to share visual content", "Interactive comment and like system to engage with others", "Responsive design for seamless use across various devices"],
        stack: ["mongodb.png", "expressjs.png", "react.png", "nodejs.png"]
    }
    const exer_search = {
        description: "ExerSearch is a fitness application designed to help both beginners looking to workout and some more advanced fitness enthusiasts find what they are looking for. This full-stack application uses MongoDB, Express.js, React, and Node.js, creating a powerful and seamless backend and frontend experience. The interface is creatued using Photoshop and Material UI for a user-friendly design, while the integration with Rapid API imports exercise details and related YouTube videos. Key features include:",
        features: ["Customizable exercise search by category and targeted muscle group, equipment, or specific exercise", "Extensive exercise database with practical examples and details", "Embedded YouTube video content for visual learning and exercise demonstration", "Discovery of similar exercises for varied workout routines", "Responsive layout for consistent user experience across devices"],
        stack: ["mongodb.png", "expressjs.png", "react.png", "nodejs.png", "materialui.png", "rapidapi.png"]
    }
    const techommerce = {
        description: "Tech-Ommerce is an e-commerce destination tailored for technology enthusiasts and gadget lovers. Built with a robust combination of MongoDB, React, Next.js, Stripe for secure payments, and Styled Components for a sleek, responsive interface, it offers a seamless online shopping experience. Customers can navigate through an extensive selection of tech products using a versatile search bar, by categories, or through a highlighted section of new arrivals. To edit selection of items on the site, I have created an admin application that interacts with the database. The site’s features include:",
        features: ["User accounts for tracking favorite items and purchase history", "Option to checkout as a guest for users on-the-go", "Ability to add and remove items from the cart with ease", "Streamlined purchase process with Stripe integration", "A ‘save info’ option for quick and effortless future checkouts"],
        stack: ["mongodb.png", "react.png", "nextjs.png", "stripe.jpg"]
    }
    return (
        <div className='grid grid-cols-1 gap-8 py-36 bg-black h-fit text-white ' ref={ref}>
            <Projects
                image="techommerce.png"
                link={"https://tech-ommerce-ao9jz9a7g-ron-dev.vercel.app/"}
                github={"https://github.com/Superrune178/Tech-ommerce"}
                title="Tech-Ommerce"
                stack={techommerce.stack}
                description={techommerce.description}
                features={techommerce.features}
                direction="left" />
            <CustomProject />

            <CustomProject2 />

            <Projects
                image="exersearch.png"
                link={"https://exer-search.vercel.app/"}
                github={"https://github.com/Superrune178/ExerSearch"}
                title="ExerSearch"
                stack={exer_search.stack}
                description={exer_search.description}
                features={exer_search.features}
                direction="right" />

            <Projects
                image="interacinn.png"
                link={"https://interac-inn.vercel.app/"}
                github={"https://github.com/Superrune178/Interac-Inn"}
                title="InteracInn"
                stack={interacinn.stack}
                description={interacinn.description}
                features={interacinn.features}
                direction="left" />
        </div>
    );
});

export default ProjectSection;