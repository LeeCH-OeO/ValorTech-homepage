import styled, { createGlobalStyle } from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(#000001, #0f1f43);
  color: #fff;
  min-height: 100vh;
`;
const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: 'Noto Sans', sans-serif;
  }
`;
const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  width: 100%;
  box-shadow: 0px 1px 2px #ffffff;
  margin-bottom: 1rem;
  @media (max-width: 600px) {
    flex-direction: column;
  }
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`;

const NavLinks = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
`;
const NavLink = styled.li`
  list-style: none;
  padding: 1rem;
  display: flex;
  cursor: pointer;
  font-weight: bold;
`;
const NavLogo = styled.img`
  padding-left: 1rem;
  height: 50px;
  width: 50px;
  @media (max-width: 600px) {
    padding-left: 0;
  }
`;
const Section = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
  }
  transition: transform 0.5s ease;
  transform: translateY(10px);
  color: white;

  margin: 2rem; /* Add margin for the gap */
`;

const Footer = styled.div`
  padding-top: 1rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: grey;
  @media (max-width: 600px) {
    flex-direction: column-reverse;
    padding-left: 1rem;
  }
  width: 100%;
`;
const FooterText = styled.div``;
const FooterIcons = styled.div``;
const FooterIconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
`;
const TeamContainer = styled.div`
  display: flex;
  height: 90vh;
  width: 100%;
  align-items: center; /* Center the content vertically */
  justify-content: space-evenly; /* Align content to the left */
  flex-direction: row;
  @media (max-width: 600px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

const TeamImage = styled.img`
  width: 600px; /* Adjust the image width as needed */
  height: auto;

  @media (max-width: 600px) {
    width: 90vw;
  }
`;

const TeamText = styled.p`
  font-size: 3rem; /* Set the default font size for the entire h1 element */
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

export {
  Section,
  MainContainer,
  Navbar,
  NavLinks,
  NavLink,
  GlobalStyle,
  Footer,
  TeamContainer,
  TeamImage,
  TeamText,
  FooterIcons,
  FooterText,
  FooterIconsContainer,
  NavLogo,
};
