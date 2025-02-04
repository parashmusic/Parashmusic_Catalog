import React from 'react'
import './Navbar.css'
import chevron from '../assets/chevron.svg';
import VilakaWoff2 from '../assets/fonts/Vilaka-Regular.woff2';
import VilakaFontWoff from '../assets/fonts/Vilaka-Regular.woff';
const Navbar = () => {
  return (
    <nav className="navbar fixed items-center justify-center lg:mx-10 mx-6">
         <style jsx global>{`
       

       @font-face {
         font-family: 'Vilaka Font Demo Version';
         src: url(${VilakaWoff2}) format('woff2'),
              url(${VilakaFontWoff}) format('woff');
         font-weight: normal;
         font-style: normal;
         font-display: swap;
       }

      .logo-text {
          font-family: 'Vilaka Font Demo Version', sans-serif;

                   }
     `}</style>
        <button
        onClick={() => document.body.classList.toggle('open')}
        className="burger"
      ></button>
      <h1>Parash</h1>

      
      {/* <div className="dropdowns">
        <div className="dropdown">
          <button>
            Services
            <img src={chevron}/>
          </button>
          <div className="dropdown-menu">
            <button>Dynamic Qr</button>
            <button>Embedded images</button>
            <button>Dedicate Music</button>
          </div>
        </div>
        <div className="dropdown">
          <button>
            Products
            <img src={chevron} />
          </button>
          <div className="dropdown-menu">
            <button>Gifting</button>
            <button>Jewels</button>
            <button>Decors</button>
          </div>
        </div>
        <div className="dropdown">
          <button>
            Support
            <img src={chevron}/>
          </button>
          <div className="dropdown-menu">
            <button>Live Chat</button>
            <button>Send Email</button>
            <button>Request Help</button>
          </div>
        </div>
      </div> */}
    </nav>
  )
}

export default Navbar