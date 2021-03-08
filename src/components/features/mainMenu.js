import React, {useState} from 'react';
//import {Link} from 'gatsby';
import styled from 'styled-components';
import { breakpoints } from '../../utils/breakpoints';
import theme from '../../utils/theme';

/* DATA */

const menu = [
  {
    label: 'home',
    slug: '/',
    active: 'active',
  },
  {
    label: 'oferta',
    slug: '/oferta',
  },
  {
    label: 'portfolio',
    slug: '/portfolio',
  },
  {
    label: 'kontakt',
    slug: '/kontakt',
  },
  {
    label: 'styleguide',
    slug: '/styleguide'
  }
]

const MainMenu = () => {
  const [menuOpen, toggleMenuOpen] = useState(false);

  return (
    <>
      <Hamburger menuOpen={menuOpen} onClick={() => toggleMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </Hamburger>
      <StyledMenu menuOpen={menuOpen}>
        <ul>
        {menu.map((item) => (
          <li key={item.label}>
            <a href={item.slug} className={item.active}>{item.label}</a>
          </li>
          ))}
        </ul>
      </StyledMenu>
    </>
  )
}

export default MainMenu;

const StyledMenu = styled.nav`
  background: ${theme.light};
  width: 100vw;
  padding: 3em;
  margin-top: 1em;
  position: absolute;
  transition: left 600ms ease-in-out, opacity 300ms;
  left: ${({ menuOpen }) => (menuOpen ? `0` : `-100vw`)};
  opacity: ${({ menuOpen }) => (menuOpen ? `1` : `0`)};
  top: 3em;
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
    justify-content: end;

    ul {
      display: flex;
      justify-content: space-between;
      width: 100%;
      border-bottom: 5px solid ${theme.secondaryLight};

      li {
        margin: 0.6rem 0;
        padding: auto;
      }
    }
  }
`;

const Hamburger = styled.button`
  background: ${theme.light};
  border: none;
  width: 30px;
  margin-left: auto;

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