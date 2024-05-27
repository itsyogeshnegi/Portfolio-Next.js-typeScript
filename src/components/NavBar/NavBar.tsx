import React, { useState } from 'react';
import DarkModeToggle from 'react-dark-mode-toggle';
import Link from 'next/link';

const NavBar: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  return (
    <div className='h-20 w-full flex justify-between items-center px-5'>
      <Link href="/HomePage">
        <p className='font-Danfo text-2xl cursor-pointer'>Yogesh Negi</p>
      </Link>
      <div className='flex gap-2'>
        <Link href="/AboutPage">
          <p className='font-Teko text-2xl cursor-pointer border-b-2 border-black'>About</p>
        </Link>
        <Link href="/">
          <p className='font-Teko text-2xl cursor-pointer border-b-2 border-black'>Work</p>
        </Link>
        <Link href="/">
          <p className='font-Teko text-2xl cursor-pointer border-b-2 border-black'>Connect</p>
        </Link>
        <DarkModeToggle
          onChange={setIsDarkMode}
          checked={isDarkMode}
          size={70}
        />
      </div>
    </div>
  );
}

export default NavBar;
