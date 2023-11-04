import React, { useState } from 'react'

//UNUSED COMPONENT. DECIDED NOT TO USE IT FOR TECHNOLOGIES

const nodeData = {
    name: "Stack",
    children: [
        {
            name: "Front-End",
            children: [
                { name: "React" },
                { name: "Tailwind" },
            ],
        },
        {
            name: "Back-End",
            children: [
                {
                    name: "Node.js",
                },
                { name: "Express" },
            ],
        },
        {
            name: "Database",
            children: [
                { name: "MongoDB" },
            ],
        },
    ],
};

function Node({ data }) {
    const [isVisible, setIsVisible] = useState(false);

    const handleNodeClick = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className="flex flex-col items-center">
            <div
                onClick={handleNodeClick}
                className="bg-accent text-white p-4 rounded-full mb-4 cursor-pointer hover:bg-red-800"
            >
                {data.name}
            </div>
            {isVisible && data.children && (
                <div className="flex space-x-8">
                    {data.children.map((child, index) => (
                        <Node key={index} data={child} />
                    ))}
                </div>
            )}
        </div>
    );
}


function TechTree() {
    return (
        <div className="flex justify-center items-center h-[650px]">
            <Node data={nodeData} />
        </div>
    )
}

export default TechTree