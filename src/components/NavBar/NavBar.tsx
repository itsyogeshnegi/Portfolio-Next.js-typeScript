import React, {useState} from 'react'
import DarkModeToggle from "react-dark-mode-toggle";

const NavBar :React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  return (
    <div className='h-20 w-full flex justify-between items-center px-5'>
        <p className='font-Danfo text-2xl cursor-pointer'>Yogesh Negi</p>
        <div  className='flex gap-2'>
        <p  className='font-Teko text-2xl cursor-pointer border-b-2 border-black'>About</p>
        <p  className='font-Teko text-2xl cursor-pointer border-b-2 border-black'>Work</p>
        <p  className='font-Teko text-2xl cursor-pointer border-b-2 border-black'>Connect</p>
        <DarkModeToggle
        onChange={setIsDarkMode}
        checked={isDarkMode}
        size={70}
        />
        </div>
    </div>
  )
}

export default NavBar