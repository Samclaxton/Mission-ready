import React, { useState } from 'react';
import data from './data.json';
import Fuse from 'fuse.js';
import Item from './item';
import './styles.css';
import NavbarSearch from './NavbarSearch';

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
import ProductImage from './images/Products.png';
import AnimalNames from './images/animal-names.png';
import './about.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Footer from './footer';
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
    <>
      <div>
        <NavbarSearch></NavbarSearch>
        <p className="title"></p>
        <div className="search-container">
          <input
            type="search"
            onChange={(e) => searchItem(e.target.value)}
            placeholder="Search products"
          />
        </div>
      </div>
      <div className="item-container">
        {searchData.map((item) => (
          <Item {...item} key={item.name} />
        ))}{' '}
      </div>
      <Footer></Footer>
    </>
  );
};

export default SettingsPage;
