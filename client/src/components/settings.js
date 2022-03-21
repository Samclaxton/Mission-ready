import React, { useState } from 'react';
import data from './data.json';
import Fuse from 'fuse.js';
import Item from './item';
import './styles.css';
import navbarMain from './navbarMain';

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
import ProductImage from './images/Products.png';
import AnimalNames from './images/animal-names.png';
import './about.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
const SettingsPage = () => {
  const [searchData, setSearchData] = useState(data);
  const searchItem = (query) => {
    if (!query) {
      setSearchData(data);
      return;
    }
    const fuse = new Fuse(data, {
      keys: ['name', 'tags'],
    });
    const result = fuse.search(query);
    const finalResult = [];
    if (result.length) {
      result.forEach((item) => {
        finalResult.push(item.item);
      });
      setSearchData(finalResult);
    } else {
      setSearchData([]);
    }
  };
  return (
    <div>
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
      <p className="title"></p>
      <div className="search-container">
        <input
          type="search"
          onChange={(e) => searchItem(e.target.value)}
          placeholder="Search products"
        />
      </div>

      <div className="item-container">
        {searchData.map((item) => (
          <Item {...item} key={item.name} />
        ))}{' '}
      </div>
    </div>
  );
};

export default SettingsPage;
