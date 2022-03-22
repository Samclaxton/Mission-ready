import React from 'react';
<<<<<<< HEAD
import { Navbar, Form, FormControl, Button, Container } from 'react-bootstrap';
import NavbarMain from './NavbarMain';
=======
import Footer from '../components/footer.js'
import './home.css'
import AnimalIcon from '../components/images/animlaslikeus_logo_1.png'
import FoodIcon from '../components/images/animal-food.jpeg'
import ProductIcon1 from '../components/images/product_1.png'
import ProductIcon2 from '../components/images/product_2.png'
import ProductIcon3 from '../components/images/product_3.png'
import ProductIcon4 from '../components/images/product_4.png'
import BigLeftArrow from '../components/images/arrowL.png'
import BigRightArrow from '../components/images/arrow.png'
import CartImage from '../components/images/Group_6043.png'
import AnimalIcon3 from '../components/images/animlaslikeus_logo_3.png'

>>>>>>> f997b32 (Home Page)

import PetLogo from './images/pet-logo.png';
import DogIcon from './images/dog-icon.png';
import CatIcon from './images/cat-icon.png';
import FishIcon from './images/fish-icon.png';
import TurtleIcon from './images/turtle-icon.png';
import BirdIcon from './images/bird-icon.png';
import HorseIcon from './images/horse-icon.png';
import SidebarFilter from './images/sidebar-filter2.png';
import Card from 'react-bootstrap/Card';
import ProductImage from './images/main-results.png';
import AnimalNames from './images/animal-names.png';
import './about.css';

export default function home() {
  return (
<<<<<<< HEAD
    <div>
      <NavbarMain></NavbarMain>
=======
    <div className='main-body'>

      <div><h3 className='main-body-text'><p>Recenty Viewed</p></h3></div>

            
    
      <div className='header-container'>

        <div className='header-box'>

          <img className='header-box-arrow-left'src={BigLeftArrow}></img>
             <div className='animal-price'>
                <img src={AnimalIcon3}></img>
                <h6 className='price-text2'>From</h6>
                <h3 className='price-text'>$23.99</h3>
              </div>
          <img src={FoodIcon}></img>
          <img className='cart_image' src={CartImage}></img>
          <img className='header-box-arrow-right'src={BigRightArrow}></img>
          
         <div className='main-price-text'>
          
        </div>  
      </div>

    </div><br></br><br></br><br></br>

  
      <div>
        <h3 className='inner-text'>Shop The New Cat Range </h3>
      </div> <br></br><br></br><br></br>

     <div className='bottom-main-div'>

          <img className ="inner_image"src={BigLeftArrow}></img>
            <div className='bottom-container-div'>    
              <img src={ProductIcon1}></img>
              <img src={ProductIcon2}></img>
              <img src={ProductIcon3}></img>
              <img src={ProductIcon4}></img> 
            </div>
          <img className="outer_image"src={BigRightArrow} ></img>
      </div>

     <div className='footer-section'>
     <Footer></Footer>
     </div>

>>>>>>> f997b32 (Home Page)
    </div>
  );
}
