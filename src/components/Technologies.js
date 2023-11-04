import React, { useState } from 'react'
import Stack from './Stack';
import Experiance from './Experiance';
import Information from './Information';

export function Tabs(props) {
    const Clicked = () => {
        props.onClick(props.index);
    };
    return (
        <button
            onClick={Clicked}
            className={`${props.activeTab === props.index ? "text-red-800 h-[87px]" : "text-gray-700 h-[87px]"}`}
        >
            {props.children}
        </button>
    )
}

function Technologies() {
    const [activeTab, setActiveTab] = useState(0);
    const tabNames = ["Technologies", "Education & Experiance", "About Me"];
    const tabHeight = 150;
    const indicatorTop = activeTab * tabHeight;

    return (
        <div className="block mt-8 mx-auto w-full gap-8 sm:gap-[100px] sm:w-1/2 sm:flex ">
            <div className="relative flex flex-row  border-l-2 pl-6 border-gray-700 text-gray-700 gap-4 text-lg sm:h-[380px] sm:gap-14 sm:flex-col sm:w-5 ">
                {/* Sliding Indicator */}
                <div
                    className="hidden absolute left-1 bg-red-800 w-[2px] h-20 transition-all duration-300 sm:left-[-2px] sm:inline"
                    style={{ top: indicatorTop + "px" }}
                ></div>

                {tabNames.map((tab, index) => (
                    <Tabs
                        key={index}
                        onClick={() => setActiveTab(index)}
                        index={index}
                        activeTab={activeTab}
                    >
                        {tab}
                    </Tabs>
                ))}
            </div>
            <div className="my-auto">
                {activeTab === 0 ? <Stack /> : activeTab === 1 ? <Experiance /> : activeTab === 2 ? <Information /> : null}
            </div>
        </div>
    );
}


export default Technologies