import React from 'react';
import {
  Container,
  Navbar,
  Button,
  Dropdown,
  ButtonGroup,
  Form,
  FormControl,
  NavDropdown,
  Nav,
} from 'react-bootstrap';
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
import DropdownButton from 'react-bootstrap/DropdownButton';
import RoyalCaninMaxi from './images/royalcaninmaxi.png';
import NavbarMain from './NavbarMain';

const ProductDetail = () => {
  return (
    <>
      <NavbarMain></NavbarMain>
      <div className="middle-section">
        {' '}
        <img className="sidebar-image" src={SidebarFilter} />
        <div>
          {/* <img className="royal-canin-maxi" src={RoyalCaninMaxi} /> */}
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
