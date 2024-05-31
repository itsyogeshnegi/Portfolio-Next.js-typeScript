import React from 'react';
import "./Box.css"
interface SkillsProps {
    image: any;
    isBouncing: boolean;
}

const Box: React.FC<SkillsProps> = ({ image, isBouncing}) => {
    return (
        <div className={`h-20 w-20 bg-slate-100 flex justify-center items-center transition-opacity duration-500 ${isBouncing ? 'animate-bounce' : 'opacity-60'}`}>
            <div className='p-1 rounded-md bg-slate-200'>
                <img src={image} />
            </div>
        </div>
    );
}

export default Box;
