import React from 'react'
import './footer.css'
import {FaFacebook,FaInstagram,FaLinkedin,FaTwitter} from 'react-icons/fa'
function footer() {
  return (
    <div className='footer'>
      <div className="footer-content">
      <div className="logo">
        <h2>The Alpha</h2>
        </div>
        <div className="links">
          <h4>Visit our:</h4>
          <hr/>
          <ul>
            <li><a href='home'>Shopping</a></li>
            <li><a href='home'>Contact</a></li>
            <li><a href='home'>categories</a></li>
          </ul>
        </div>
        <div className="social-links">
          <h4>visit our social media platforms</h4>
          <hr/>
          <div className="social-icons">
          <FaFacebook/>
          <FaInstagram/>
          <FaTwitter/>
          <FaLinkedin/>
          </div>
      </div>
      <div className="newsLetter">
        <h4>Subscribe to our news-letter</h4>
        <div className="subscribe">
        <input type='text' placeholder="Enter Email"/>
        <button>subscribe</button>
        </div>
      </div>
      </div>
      <hr/>
    </div>
  )
}

export default footer

