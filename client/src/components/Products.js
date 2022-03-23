import './products.css';
import {
  Button,
  NavDropdown,
  Navbar,
  Nav,
  Container,
  Stack,
  Col,
  Row,
  Image,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import PetLogo from './images/pet-logo.png';
import TopIconNav from './images/top-icon-navigation.png';
import FilterImage from './images/sidebar-filter2.png';
import ProductImage from './images/Products.png';
import NavbarMain from './navbarMain';

function App() {
  return (
    <div className="App">
      <NavbarMain></NavbarMain>
      <main>
        <Container>
          <Row className="px-4 my-0">
            <Col className="col" sm={4}>
              <Image className="filter-image" src={FilterImage} fluid />
            </Col>
            <Col className="col2" sm={8}>
              <Image className="product-image" src={ProductImage} fluid />
            </Col>
          </Row>
          <Row></Row>
        </Container>
      </main>
    </div>
  );
}

export default App;
