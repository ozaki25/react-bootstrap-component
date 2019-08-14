import React from 'react';
import styled from 'styled-components';
import Container from '../Container';

const StyledNav = styled.nav`
  position: relative;
  clear: both;
  min-height: 50px;
  margin-bottom: 20px;
  border: 1px solid transparent;

  /* navbar-default */
  background-color: #f8f8f8;
  border-color: #e8e8e8;
`;

const NavbarHeader = styled.div`
  clear: both;
  margin-right: 0;
  margin-left: 0;
  float: left;
`;

const NavbarBrand = styled.a`
  float: left;
  padding: 15px 15px;
  font-size: 18px;
  line-height: 20px;
  text-decoration: none;
  color: #777;
  &:hover,
  &:focus {
    text-decoration: none;
  }
`;

const NavbarLinks = styled.ul`
  margin: 0;
  padding-left: 0;
  list-style: none;
`;

const NavbarLink = styled.li`
  position: relative;
  display: block;
  float: left;
`;

const NavbarLinkAnchor = styled.a`
  position: relative;
  display: block;
  padding: 15px;
  line-height: 20px;
  color: #777;
  text-decoration: none;
  &:hover,
  &:focus {
    text-decoration: none;
    background-color: #eee;
    color: #333;
  }
`;

const NavbarText = styled.p`
  color: #777;
  margin: 15px;
  float: right;
`;

function Navbar({ title = {}, links = [] }) {
  const { text, tag, ...titleProps } = title;
  return (
    <StyledNav>
      <Container>
        <NavbarHeader>
          <NavbarBrand as={tag || 'a'} {...titleProps}>
            {text}
          </NavbarBrand>
        </NavbarHeader>
        <NavbarLinks>
          {links.map(({ text, tag, ...linkProps }) => (
            <NavbarLink>
              <NavbarLinkAnchor as={tag || 'a'} {...linkProps}>
                {text}
              </NavbarLinkAnchor>
            </NavbarLink>
          ))}
        </NavbarLinks>
      </Container>
    </StyledNav>
  );
}

Navbar.displayName = 'Navbar';

export default Navbar;
