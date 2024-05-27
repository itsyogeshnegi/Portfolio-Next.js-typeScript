import React from 'react'
import Image from 'next/image'
interface FooterCardsProps {
    media: String,
    icon: any,
    link:any

  }
const FooterCards:React.FC<FooterCardsProps> = ({media , icon , link}) => {
  return (
    <>
    <a href={link} target='_blank'>
        <div className='py-1 cursor-pointer rounded-lg px-10 border-2 border-black flex gap-3 justify-between items-center'>
            <img className='h-[30px]' src={icon}/>
            <p className='font-Teko text-xl'>{media}</p>
        </div>
    </a>
    </>
  )
}

export default FooterCards