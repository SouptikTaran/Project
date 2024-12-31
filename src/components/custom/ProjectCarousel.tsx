import React, { useState } from "react";
import Heading from "./Heading";
import { Projects } from "@/lib/Images"; // Assuming this contains an array of image URLs

const cards = Projects;

const Carousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(2); // Middle card as initial focus

    const handleLeftClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
    };

    const handleRightClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

    return (
        <div className="relative flex flex-col items-center overflow-hidden">
            {/* Heading */}
            <Heading text="Portfolio" />

            {/* Carousel Container */}
            <div className="relative flex justify-center items-center my-10 h-80 w-full">
                {/* Left Arrow */}
                <button
                    className="absolute left-4 bg-blue-500 text-white w-10 h-10 rounded-full flex justify-center items-center shadow-lg z-10"
                    onClick={handleLeftClick}
                >
                    {"<"}
                </button>

                {/* Cards */}
                <div className="flex justify-center items-center relative w-full h-full">
                    {cards.map((card, index) => {
                        const offset = (index - currentIndex + cards.length) % cards.length;

                        // Adjust the offset for smoother looping
                        const adjustedOffset =
                            offset > cards.length / 2 ? offset - cards.length : offset;

                        // Define scale and translateX based on adjustedOffset
                        const scale = 1 - Math.abs(adjustedOffset) * 0.15;
                        const translateX = adjustedOffset * 60;

                        return (
                            <div
                                key={card.image} // Use a unique key based on the image source
                                className={`absolute top-1/2 rounded-lg text-center p-6 w-[28rem] md:w-[25.5rem] h-[25rem] transform transition-transform duration-500 ease-in-out ${Math.abs(adjustedOffset) > 2 ? "opacity-0" : "opacity-100"}`}
                                style={{
                                    transform: `translateX(${translateX}%) translateY(-50%) scale(${scale})`,
                                    zIndex: cards.length - Math.abs(adjustedOffset),
                                    willChange: "transform, opacity", // Optimizing the transitions
                                }}
                            >
                                <img
                                    src={card.image}
                                    alt="carousel item"
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>
                        );
                    })}
                </div>

                {/* Right Arrow */}
                <button
                    className="absolute right-4 bg-blue-500 text-white w-10 h-10 rounded-full flex justify-center items-center shadow-lg z-10"
                    onClick={handleRightClick}
                >
                    {">"}
                </button>
            </div>
        </div>
    );
};

export default Carousel;
