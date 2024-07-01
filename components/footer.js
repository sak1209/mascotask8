// components/Footer.js
import react, { component } from 'react';
import Link from 'next/link';
import Image from "next/image";
import apple from "../public/apple.svg";
import play from "../public/play.svg";
import x from "../public/x.svg";
import insta from "../public/insta.svg";
import fb from "../public/fb.svg";
import git from "../public/git.svg";
import masco from "../public/masco.png";


// components/Footer.js
const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
      <div className="column-container">
          <div className="column">
            <h3><Image
              src={masco}
              alt="Hero Image"

            /></h3>
            <p>Email, SMS, Facebook, Chat, CRM, & more, all-in-one platform to help you grow your business through building stronger customer relationships.</p>
            <div className="social-icons">
              <a href="#"><Image src={x} alt="X" width={20} height={20} /></a>
              <a href="#"><Image src={fb} alt="Facebook" width={20} height={20} /></a>
              <a href="#"><Image src={insta} alt="Instagram" width={20} height={20} /></a>
              <a href="#"><Image src={git} alt="GitHub" width={20} height={20} /></a>
            </div>
          </div>
          <div className="column">
            <h4>Primary Pages</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="column">
            <h4>Utility Pages</h4>
            <ul>
              <li><a href="#">Signup</a></li>
              <li><a href="#">Login</a></li>
              <li><a href="#">404 Not Found</a></li>
              <li><a href="#">Password Reset</a></li>
            </ul>
          </div>
          <div className="column">
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Support</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Strategic Finance</a></li>
              <li><a href="#">Video Guide</a></li>
            </ul>
          </div>
          <div className="column">
            <h4>Download Now</h4>
            <div>
              <div className="app"><Image src={apple} alt="App Store" />download on the App Store</div>
            </div>
            <div>
              <div className="store"> <Image src={play} alt="Google Play" />get it on Google Store</div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© Copyright 2024, All Rights Reserved by PixcelsThemes</p>
        </div>
      </div>
    </footer>  
  );
};

export default Footer;
