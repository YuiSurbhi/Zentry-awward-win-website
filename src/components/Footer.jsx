import React from 'react'
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'; // Import FaTwitter


const links = [
  {href: 'https://www.linkedin.com/in/surbhi-verma-a63881295/', icon: <FaLinkedin />},
  {href: 'https://github.com/YuiSurbhi', icon: <FaGithub />},
  {href: 'https://www.instagram.com/yuisurbhi/', icon: <FaInstagram />},
  {href: 'https://x.com/YuiSurbhi', icon: <FaTwitter/>}
]

const Footer = () => {
  return (
    <footer className='w-screen bg-violet-300 py-4 text-black'>
      <div className='container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row'>
        <p className='text-center text-sm md:text-left'>
          &copy; Nova 2024, All right reserved
        </p>

        <div className='flex justify-center gap-4 md:justify-start'>
          {links.map((link) => (
            <a 
              key={link} 
              href={link.href}
              target='_blank'
              rel='noopener nreferrer'
              className='text-black transition-colors duration-500 ease-in-out hover:text-white'
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a href='#privacy-policy' className='text-center text-sm hover:underline md:text-right'>
          Privacy Policy
        </a>
      </div>
    </footer>
  )
}

export default Footer