import React from 'react'

const Navbar = () => {
  return (
    <nav className='navbar'>
    <div className='logo'>
    <img src='img/logo.png' alt='logo'></img></div>
    <div className='navbar__text'>

    <ul className='navbar__ul'>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>Menu</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Shop</a></li>
        <li><a href='#'>News</a></li>
        <li><a href='#'>Contact</a></li>

    </ul>
    </div>


    </nav>
  )
}

export default Navbar