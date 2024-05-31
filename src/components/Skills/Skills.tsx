import React, { useState, useEffect } from 'react';
import Box from './Box';

const Skills = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const skillImages = [
        "./skills/js.png",
        "./skills/react.png",
        "./skills/node.png",
        "./skills/express.png",
        "./skills/mongoDb.png",
        "./skills/tailwind.png",
        "./skills/next.png",
        "./skills/redux.png",
        "./skills/github.png",
        "./skills/netlify.png",
        "./skills/vercel.png"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % skillImages.length);
        }, 1500); 

        return () => clearInterval(interval);
    }, [skillImages.length]);

    return (
        <div className='w-full flex justify-center gap-5 items-center py-2'>
            {skillImages.map((image, index) => (
                <Box key={index} image={image} isBouncing={index === currentIndex}  />
            ))}
        </div>
    );
}

export default Skills;
