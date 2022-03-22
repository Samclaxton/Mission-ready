import React from 'react';
import { Navbar, Form, FormControl, Button, Container } from 'react-bootstrap';
import NavbarMain from './NavbarMain';

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
    <div>
      <NavbarMain></NavbarMain>
    </div>
  );
}
