import { React, useState } from 'react';
import {
  Navbar,
  Nav,
  Col,
  Row,
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
import TopIconNav from './images/top-icon-navigation.png';
import './products.css';

export default function NavbarMain() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <header>
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
          <Navbar className="my-0" bg="dark">
            <Container>
              <Navbar.Brand></Navbar.Brand>
            </Container>
          </Navbar>
          {/* <Container>
          <Row className="">
            <Col className="navbar1"></Col>
          </Row>
        </Container> */}
          <Navbar className="navbar-main" bg="light" variant="light">
            <Container>
              <Navbar.Brand href="/Home">
                <img className="pet-logo" src={PetLogo}></img>
                <img className="pet-icons" src={TopIconNav}></img>
              </Navbar.Brand>

              <Nav className="me-auto">
                <Nav.Link href="#features"></Nav.Link>
                <Nav.Link href="#pricing"></Nav.Link>
              </Nav>
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
            </Container>
          </Navbar>
          <Navbar className="my-4" bg="light">
            <Container>
              <Navbar.Brand>Hi Papa Bear!</Navbar.Brand>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-4"
                  aria-label="Search"
                />
              </Form>
            </Container>
          </Navbar>
          {/* <div classname="search-section">
          <Navbar bg="light" expand="lg">
            <Container fluid>
              <Navbar.Brand href="/home">Hi Papa Bear!</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll"></Navbar.Collapse>
            </Container>
          </Navbar>
        </div> */}
        </>
      </header>
    </div>
  );
}
