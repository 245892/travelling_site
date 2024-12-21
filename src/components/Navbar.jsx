import React from 'react'
import {Link} from 'react-scroll'

const Navbar = () => {
  return (
    <nav>
        <img src="../src/assets/travellogo6.jpg" className='nav--logo'/>
        <ul>
           <li><Link to="header" spy={true}  smooth={true}  offset={50}  duration={1500} >Home</Link></li>
           <li><Link to="about"  spy={true} smooth={true} offset={50} duration={1500} >About</Link></li>
           <li><Link to="places" spy={true} smooth={true} offset={50}  duration={1500} >Places</Link></li>
           <li><Link to="price" spy={true}  smooth={true} offset={50} duration={1500} >Price</Link></li>
     </ul>
    </nav>
  )
}

export default Navbar