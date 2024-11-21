import React from 'react';
import Spline from '@splinetool/react-spline';
import { BrowserRouter as Router, Routes, Route, Link as RouterLink } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

// Global styles to reset margins and prevent white space
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;
    overflow: hidden; /* Prevent scrolling from white space */
  }

  #root {
    width: 100%;
    height: 100%;
  }

  body {
    font-family: 'Spline Sans Mono', monospace;
  }
`;

// Navbar styling
const Navbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px; 
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  z-index: 10;
`;

const NavItems = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  color: white;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: #9400A6;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* Prevent scrolling */
`;

// Styled link for internal navigation
const StyledLink = styled(RouterLink)`
  color: white;
  text-decoration: none;

  &:hover {
    color: #9400A6;
  }
`;

const Link = styled.a`
  color: white;
  text-decoration: none;

  &:hover {
    color: #9400A6;
  }
`;

export default function App() {
  return (
    <Router>
    
      <GlobalStyle />
      <Navbar>
        <h1 style={{ color: 'white', fontSize: '1.5rem', margin: 0 }}>Gabriel Holder - Software Engineer</h1>
        <NavItems>
          <NavItem>
            <StyledLink to="/">About Me</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="/boeing">Boeing</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="/nttdata">NTTDATA</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="/uta">UTA</StyledLink>
          </NavItem>
          <NavItem>
            <Link href="https://github.com/gholder513" target="_blank">
              GitHub
            </Link>
          </NavItem>
        </NavItems>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/boeing" element={<Boeing />} />
        <Route path="/nttdata" element={<NTTDATA />} />
        <Route path="/uta" element={<UTA />} />
      </Routes>
      </Router>
  );
}

const Home = () => (
  <Container>
    <Spline scene="https://prod.spline.design/WU2irVw9VyJ1X97g/scene.splinecode" />
  </Container>
);

const Boeing = () => (
  <Container>
    <Spline scene="https://prod.spline.design/p0HJlTnE-FgqihVl/scene.splinecode" />
  </Container>
);

const NTTDATA = () => (
  <Container>
    <Spline scene="https://prod.spline.design/3x-2Z1CLob7WXNr2/scene.splinecode" />
  </Container>
);

const UTA = () => (
  <Container>
    <Spline scene="https://prod.spline.design/xcaEoWHmaZZXqe7Z/scene.splinecode" />
  </Container>
);