import React from 'react'
import Top from '../../Assets/topheading.jpg'
import './nav.css'
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />

const Nav = () => {
  return (
    <div className='container' id='home' >
        <div className='top-headings'>
            <img src={Top} alt="" />
        <h1>Harvest</h1>
    </div>
        <hr />      
        <nav className='nav-container'>
               <a className="links" href="#home">Home</a>
              <a className="links" href="#shop">Shop</a>
              <a className="links" href="#blogs">Blogs</a>
              <a className="links" href="#register">Register</a>
        </nav>
        <div className="toggle_btn">
          <div className="bar">
          </div>
        </div>
    </div>
  )
}

export default Nav