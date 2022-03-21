import React from 'react';
import {
  Container,
  Navbar,
  Button,
  Dropdown,
  ButtonGroup,
} from 'react-bootstrap';
import PetLogo from './pet-logo.png';
import DogIcon from './dog-icon.png';
import CatIcon from './cat-icon.png';
import FishIcon from './fish-icon.png';
import TurtleIcon from './turtle-icon.png';
import BirdIcon from './bird-icon.png';
import HorseIcon from './horse-icon.png';
import SidebarFilter from './sidebar-filter.png';
import Card from 'react-bootstrap/Card';
import ProductImage from './Products.png';
import AnimalNames from './animal-names.png';
import './about.css';
import DropdownButton from 'react-bootstrap/DropdownButton';

const About = () => {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">
            <div>
              <img
                alt=""
                src={PetLogo}
                width="55"
                height="57"
                className="pet-logo"
              />
              {''}
            </div>
            <div class="animal-images">
              <img
                alt=""
                src={DogIcon}
                width="30"
                height="30"
                className="dog-image"
              />{' '}
              <img
                alt=""
                src={CatIcon}
                width="30"
                height="30"
                className="dog-image"
              />{' '}
              <img
                alt=""
                src={FishIcon}
                width="30"
                height="30"
                className="dog-image"
              />{' '}
              <img
                alt=""
                src={BirdIcon}
                width="30"
                height="30"
                className="dog-image"
              />{' '}
              <img
                alt=""
                src={TurtleIcon}
                width="30"
                height="30"
                className="dog-image"
              />
              {''}
              <img
                alt=""
                src={HorseIcon}
                width="30"
                height="30"
                className="dog-image"
              />{' '}
              <Dropdown as={ButtonGroup}>
                <Button variant="light">Login</Button>

                <Dropdown.Toggle
                  split
                  variant="light"
                  id="dropdown-split-basic"
                />

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Login</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Search</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Contact</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            {/* <img className="animal-names" src={AnimalNames}></img> */}
          </Navbar.Brand>
        </Container>
      </Navbar>
      <p></p>
      <div className="middle-section">
        {' '}
        <img className="sidebar-image" src={SidebarFilter} />
        <img className="product-image" src={ProductImage} />
      </div>

      <>
        <br />
      </>
    </div>
  );
};

export default About;
