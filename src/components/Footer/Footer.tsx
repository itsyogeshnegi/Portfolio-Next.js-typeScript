import React from 'react';
import FooterCards from './FooterCards';

const Footer: React.FC = () => {
  return (
    <div className='py-8 w-full bg-slate-200 flex justify-around items-center'>
      <FooterCards link={"https://www.linkedin.com/in/yogesh-negi-7b8568302/"} icon="/linkedin.png" media="LinkedIn" />
      <FooterCards link={"https://github.com/itsyogeshnegi"} icon="/github.png" media="GitHub" />
      <FooterCards link={"https://x.com/itsyogeshnegi"} icon="/twitter.png" media="Twitter" />
      <FooterCards link={"mailto:yyogesh.singh.negi@gmail.com"} icon="/gmail.png" media="Gmail" />
    </div>
  );
}

export default Footer;
