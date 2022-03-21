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
import SidebarFilter from './images/sidebar-filter.png';
import Card from 'react-bootstrap/Card';
import ProductImage from './images/main-results.png';
import AnimalNames from './images/animal-names.png';
import './about.css';
import DropdownButton from 'react-bootstrap/DropdownButton';

const About = () => {
  return (
    <div class="first">
      <Navbar className="black-navbar" bg="dark" variant="dark">
        <Container></Container>
      </Navbar>

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
            </div>
          </Navbar.Brand>
          <div className="btns">
            <button type="button" class="btn btn-secondary">
              Cart
            </button>
            <button type="button" class="btn btn-secondary">
              Login
            </button>
          </div>

          {/* </div> */}
        </Container>
      </Navbar>
      {/* <img className="animal-names" src={AnimalNames}></img> */}

      <p></p>
      <div classname="search-section">
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand href="/home">Hi Papa Bear!</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-3"
                  aria-label="Search"
                  a
                  href="search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
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
