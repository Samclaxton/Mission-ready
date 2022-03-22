import { React, useState } from 'react';
import {
  Navbar,
  Form,
  FormControl,
  Button,
  Container,
  Modal,
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
import TopIconNavigation from './images/top-icon-navigation.png';
import './about.css';
import { Row } from 'react-bootstrap';

export default function NavbarSearch() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Subscribe" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <div class="first">
        <Navbar className="black-navbar" bg="dark" variant="dark">
          <Container></Container>
        </Navbar>

        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand href="/">
              <div>
                <img
                  href="/home"
                  alt=""
                  src={PetLogo}
                  width="50"
                  height="50"
                  className="pet-logo"
                />
                <img
                  src={TopIconNavigation}
                  className="top-icon-navigation"
                ></img>

                {''}
              </div>
            </Navbar.Brand>
          </Container>
          <button type="button" class="btn btn-secondary">
            Cart
          </button>
          <Button
            type="button"
            class="btn btn-secondary"
            variant="secondary"
            onClick={handleShow}
          >
            Login
          </Button>
        </Navbar>

        <p></p>
        <div classname="search-section">
          <Navbar bg="light" expand="lg">
            <Container fluid>
              <Navbar.Brand href="/home">Hi Papa Bear!</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll"></Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </div>
    </>
  );
}
