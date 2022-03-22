import React from 'react';
import './footer.css';
import SocialMediaIcon from '../components/images/SOCIAL_MEDIA.png'
import DogImage from '../components/images/dog.png'


const Footer = () => {
    return (
      <div>
        <div></div>
        
        <br></br><br></br><br></br><br></br>


          <div className="grid-container">
            <div className="grid-1">Autoship Save 20% Off</div>
            <div className="grid-2"></div>
            <div className="grid-3">Free Delivery Over $39</div>
            <div className="grid-4"><img src={DogImage}></img></div>
          </div> <br>
        
          </br><br></br><br></br>

      


          <div className='text-name'>
            <div><h6>About Us</h6></div>
            <div><h6>Services & Shipping </h6></div>
            <div><img src={SocialMediaIcon}></img></div>
            <div><h6>Contact</h6></div>
            <div><h6>Terms & Policies</h6></div>
          </div> 

            <br></br><br></br>


 
     </div>
    );
  };
  

  export default Footer;