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
        </Container>
        <div>
          <button class="login-btn">Cart</button>
          <button class="login-btn">Login</button>
        </div>
      </Navbar>
      {/* <img className="animal-names" src={AnimalNames}></img> */}
      <p></p>
      <div classname="search-section">
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">Hi Papa Bear!</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              {/* <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                <NavDropdown title="Link" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#" disabled>
                  Link
                </Nav.Link>
              </Nav> */}
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
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

      <>
        <br />
      </>
    </div>
  );
};

export default About;
