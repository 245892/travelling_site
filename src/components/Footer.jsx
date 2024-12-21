import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer>
      <ul className="social_icons">
        <li><a href="https://www.facebook.com/dennis.deleon.3939"><FaFacebook size="2em" color="#fffa33"/></a></li>
         <li><a href="https://www.instagram.com/denziedeleon/"><FaInstagram size="2em" color="#fffa33"/></a></li>
        <li><a href="https://www.linkedin.com/in/dennis-de-leon-6a21651a7/"><FaLinkedin size="2em" color="#fffa33"/></a></li>
        <li><a href="https://github.com/245892"><FaGithub size="2em" color="#fffa33"/></a></li>
      </ul>
       <div className='text-footer'>
        <p className='text-footer1'>@{new Date().getFullYear()} DDL Travels. All rights reserved</p>
        <p className='text-footer2'>Designed by Engr. Dennis De Leon</p>
       </div>
      </footer>
  )
}

export default Footer