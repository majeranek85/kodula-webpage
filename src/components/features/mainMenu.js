import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
//import {Link} from 'gatsby';
import styled from 'styled-components';
import { breakpoints } from '../../utils/breakpoints';
import theme from '../../utils/theme';
import Logo from '../common/logo';
import { Link } from 'react-scroll';

/* DATA */

const menu = [
  {
    label: 'home',
    slug: '/',
    active: 'active',
    section: 'home',
  },
  {
    label: 'oferta',
    slug: '/oferta',
    section: 'services',
  },
  {
    label: 'portfolio',
    slug: '/portfolio',
    section: 'our-work',
  },
  {
    label: 'kontakt',
    slug: '/kontakt',
    section: 'contact',
  },
  // {
  //   label: 'styleguide',
  //   slug: '/styleguide',
  //   section: 'styleguide'
  // }
];

const MainMenu = () => {
  const [menuOpen, toggleMenuOpen] = useState(false);

  const toggle = () => {
    toggleMenuOpen(!menuOpen);
  };

  return (
    <Container fluid>
      <StyledRow>
        <StyledLogoCol xs={10} lg={3}>
          <Logo className="logo" />
        </StyledLogoCol>
        <StyledCol xs={2} lg={{ order: 3 }}>
          <StyledHamburger menuOpen={menuOpen} onClick={toggle}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </StyledHamburger>
        </StyledCol>
        <Col xs={12} lg={9}>
          <StyledMenu onClick={toggle} menuOpen={menuOpen}>
            <ul>
              {menu.map((item) => (
                <li key={item.label}>
                  <Link to={item.section} onClick={toggle} smooth={true} offset={-80} hashSpy spy={true}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </StyledMenu>
        </Col>
      </StyledRow>
    </Container>
  );
};

export default MainMenu;

/* STYLE */

const StyledRow = styled(Row)`
 background: transparent;
`;

const StyledLogoCol = styled(Col)`
  background: transparent;
`;

const StyledCol = styled(Col)`
  display: flex;
  justify-content: flex-end;
  background: transparent;
`;

const StyledMenu = styled.nav`
  backdrop-filter: blur(30px);
  width: 100%;
  padding: 3em;
  margin-top: 0.5em;
  position: absolute;
  transition: left 600ms ease-in-out, opacity 300ms;
  left: ${({ menuOpen }) => (menuOpen ? `0` : `-100vw`)};
  opacity: ${({ menuOpen }) => (menuOpen ? `1` : `0`)};
  border-top: 5px solid ${theme.secondaryLight};
  border-bottom: 8px dotted ${theme.secondaryLight};

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;

    li {
      margin-bottom: 1.5em;

      a {
        text-transform: uppercase;
        color: ${theme.text};
        font-weight: 400;
        cursor: pointer;

        &.active {
          color: ${theme.primary};
          font-weight: 500;
          text-decoration: none;
        }

        &:not([href]):not([class]):hover {
          color: ${theme.primary};
        }
      }
    }
  }

  @media ${breakpoints.lg} {
    opacity: 1;
    left: 0;
    top: 0;
    position: relative;
    border-top: 0;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: flex-end;
    border-bottom: 5px solid ${theme.secondaryLight};
    background: transparent;
    backdrop-filter: none;

    ul {
      flex-direction: row;
      justify-content: end;

      li {
        margin: 2em 0 0.6em 3em;
      }
    }
  }
`;

const StyledHamburger = styled.button`
  background: transparent;
  border: none;
  width: 30px;
  height: 77px;

  span {
    height: 3px;
    margin-bottom: 5px;
    background: ${theme.text};
    display: block;
    position: relative;
    transition: opacity 200ms, transform 300ms;

    :nth-of-type(1),
    :nth-of-type(3) {
      width: 20px;
      opacity: ${({ menuOpen }) => (menuOpen ? `0` : `1`)};
    }
    :nth-of-type(2) {
      transform: ${({ menuOpen }) => (menuOpen ? `rotate(45deg)` : `rotate(0)`)};
      top: ${({ menuOpen }) => (menuOpen ? `8px` : `0`)};
    }
    :nth-of-type(4) {
      transform: ${({ menuOpen }) => (menuOpen ? `rotate(-45deg)` : `rotate(0)`)};
      top: ${({ menuOpen }) => (menuOpen ? `-8px` : `0`)};
    }
  }

  &:hover {
    span {
      background: ${theme.primary};
    }
  }

  @media ${breakpoints.lg} {
    display: none;
  }
`;
