import React from 'react';
import { Link } from 'react-router';
import {
  TopBar,
  TopBarTitle,
  TopBarRight,
  Menu,
  MenuItem
} from 'react-foundation';

const topBar = {
  position: "fixed",
  width: "100%",
  zIndex: 2
};

export const Navbar = () => (
  <TopBar style={topBar} className="navbar">
    <TopBarTitle className="navbar__title"><Link to="/"><img style={{maxWidth: "180px"}} src={'/images/activelamp-logo.svg'} /></Link></TopBarTitle>
    <TopBarRight className="navbar__right">
      {/* @todo: get this from the store which should be server rendered*/}
      <Menu>
        <MenuItem><Link to="/blog">Blog</Link></MenuItem>
      </Menu>
    </TopBarRight>
  </TopBar>
);