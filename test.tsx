import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link as RouterLink } from 'react-router-dom';
import Spline from '@splinetool/react-spline';
import styled, { createGlobalStyle } from 'styled-components';

// Global styles to reset margins and prevent white space
const GlobalStyle = createGlobalStyle`
  /* Your global styles here */
`;

// Navbar styling
const Navbar = styled.nav`
  /* Your navbar styles here */
`;

const NavItems = styled.ul`
  /* Your nav items styles here */
`;

const NavItem = styled.li`
  /* Your nav item styles here */
`;

// Styled link for internal navigation
const StyledLink = styled(RouterLink)`
  color: white;
  text-decoration: none;

  &:hover {
    color: #9400A6;
  }
`;

// Styled link for external navigation
const ExternalLink = styled.a`
  color: white;
  text-decoration: none;

  &:hover {
    color: #9400A6;
  }
`;

const Container = styled.div`
  /* Your container styles here */
`;

export default function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar>
        <h1 style={{ color: 'white', fontSize: '1.5rem', margin: 0 }}>
          Gabriel Holder - Software Engineer
        </h1>
        <NavItems>
          <NavItem>
            <StyledLink to="/">About Me</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="/work_experience">Work Experience</StyledLink>
          </NavItem>
          <NavItem>
            <ExternalLink href="https://github.com/gholder513" target="_blank" rel="noopener noreferrer">
              GitHub
            </ExternalLink>
          </NavItem>
        </NavItems>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work_experience" element={<WorkExperience />} />
      </Routes>
    </Router>
  );
}

const Home = () => (
  <Container>
    <Spline scene="https://prod.spline.design/WU2irVw9VyJ1X97g/scene.splinecode" />
  </Container>
);

const WorkExperience = () => (
  <Container>
    <Spline scene="https://prod.spline.design/n5Tid4P7nmPNFfIB/scene.splinecode" />
  </Container>
);
