import React from 'react';
import Navbar from './Navbar';

const Header = () => {
  return (
    <div className='banner'>
        <Navbar />
           <div className='banner__content'>
            <div className='container'>
                <div className='banner__text'>
               <h3>Pizza Delivery</h3>
               <h1>MAESTRO PIZINNI</h1>
               <p>lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod ut laoreet dolore magna.
               </p>
               <div className='banner__btn'>
                <a href='' className='btn btn-smart'>DELIVERY NOW</a>
               </div>
               </div>
            </div>
           </div>
    </div>
  )
}

export default Header