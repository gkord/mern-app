import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavbarLink } from 'styled-bootstrap-components';

const Navigation = () => {
  return (
    <Navbar expandSm dark>
      <Nav>
        <Link to="/">
          <NavbarLink as="div" dark active>
            Exercise Tracker
          </NavbarLink>
        </Link>
        <Link to="/">
          <NavbarLink as="div" dark>
            Exercises
          </NavbarLink>
        </Link>
        <Link to="/create">
          <NavbarLink as="div" dark>
            Create Exercise Log
          </NavbarLink>
        </Link>
        <Link to="/user">
          <NavbarLink as="div" dark>
            Create User
          </NavbarLink>
        </Link>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
