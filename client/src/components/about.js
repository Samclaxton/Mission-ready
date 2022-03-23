import React from 'react';
import NavbarMain from './navbarMain';
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

const About = () => {
  return (
    <div>
      <NavbarMain></NavbarMain>
      <div className="middle-section">
        {' '}
        <img className="sidebar-image" src={SidebarFilter} />
        <img className="product-image" src={ProductImage} />
      </div>
      <br />
    </div>
  );
};

export default About;
