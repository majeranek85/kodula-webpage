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
    section:'home'
  },
  {
    label: 'oferta',
    slug: '/oferta',
    section:'services'
  },
  {
    label: 'portfolio',
    slug: '/portfolio',
    section: 'our-work'
  },
  {
    label: 'kontakt',
    slug: '/kontakt',
    section: 'contact'
  },
  {
    label: 'styleguide',
    slug: '/styleguide'
  }
]

const MainMenu = () => {
  const [menuOpen, toggleMenuOpen] = useState(false);

  return (
    <Container fluid>
      <Row>
        <Col xs={10} md={3} >
          <Logo className='logo' title='KODULA' />
        </Col>
        <Col xs={2} md={{ order: 3 }} style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Hamburger menuOpen={menuOpen} onClick={() => toggleMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </Hamburger>
        </Col>
        <Col xs={12} md={9}>
          <StyledMenu menuOpen={menuOpen}>
            <ul>
              {menu.map((item) => (
                <li key={item.label}>
                  <Link to={item.section} smooth={true} offset={-50} href={item.slug} className={item.active}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </StyledMenu>
        </Col>
      </Row>
    </Container>
  )
}

export default MainMenu;

const StyledMenu = styled.nav`
  background: ${theme.light};
  width: 100%;
  padding: 3em;
  position: absolute;
  transition: left 600ms ease-in-out, opacity 300ms;
  left: ${({ menuOpen }) => (menuOpen ? `0` : `-100vw`)};
  opacity: ${({ menuOpen }) => (menuOpen ? `1` : `0`)};
  border-top: 5px solid ${theme.secondaryLight};

  ul {
    list-style: none;

    li {

      margin-bottom: 1.5em;
      margin-left: 35%;
      padding-bottom: 0.5em;

      a {
        text-transform: uppercase;
        color: ${theme.text};
        font-weight: 400;

        &:hover {
          text-decoration: none;
          color: ${theme.primary};
        }

        &.active {
          color: ${theme.primary};
        }
      }
    }
  }

  @media ${breakpoints.md} {
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

    ul {
      display: flex;
      justify-content: end;

      li {
        margin: 2rem 0 0.6rem 3rem;
      }
    }
  }
`;

const Hamburger = styled.button`
  background: ${theme.light};
  border: none;
  width: 30px;
  height: 82px;

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
      opacity:${({ menuOpen }) => (menuOpen ? `0` : `1`)};
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

  @media ${breakpoints.md} {
    display: none;
  }
`;