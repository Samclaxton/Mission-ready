import { React } from 'react';
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
  Image,
  Col,
  Row,
  DropdownButton,
} from 'react-bootstrap';
import PetLogo from './images/pet-logo.png';
import DogIcon from './images/dog-icon.png';
import CatIcon from './images/cat-icon.png';
import FishIcon from './images/fish-icon.png';
import TurtleIcon from './images/turtle-icon.png';
import BirdIcon from './images/bird-icon.png';
import HorseIcon from './images/horse-icon.png';
import FilterImage from './images/sidebar-filter2.png';
import Card from 'react-bootstrap/Card';
import ProductImage from './images/main-results.png';
import AnimalNames from './images/animal-names.png';
import './about.css';
import RoyalCaninMaxi from './images/royalcaninmaxi.png';
import NavbarMain from './navbarMain';
import WriteReview from './write-review.png';
import RoyalCaninText from './images/royal-canin-text.png';
import Footer from './footer';

const ProductDetail = () => {
  return (
    <>
      <div className="App">
        <NavbarMain></NavbarMain>
        <main>
          <Container>
            <Row className="px-4 my-0">
              <Col className="col" sm={4}>
                <Image className="filter-image" src={FilterImage} fluid />
              </Col>
              <Col className="col2 px-4 my-5" sm={4}>
                <Image className="filter-image" src={RoyalCaninMaxi} fluid />{' '}
                {/* <Image className="product-image" src={} fluid /> */}
              </Col>
              <Col className="col2 px-4 my-5" sm={4}>
                <h1>ROYAL CANIN MAXI ADULT DRY FOOD!</h1>
                <Image className="" src={WriteReview} fluid />
                <br></br>
                <br></br>
                <h1>$171.99</h1>
                <br></br>
                <br></br>
                <Image className="" src={RoyalCaninText} fluid />
                {/* <Image className="product-image" src={} fluid /> */}
              </Col>
            </Row>
            <Row></Row>
          </Container>
        </main>
        <div className="bottom-footer">
          <Footer></Footer>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
