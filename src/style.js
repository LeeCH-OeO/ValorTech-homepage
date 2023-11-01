import styled, { createGlobalStyle } from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  min-height: 100vh;
  max-width: fit-content;
  background-color: black;
  overflow-x: hidden;
`;

const ContainerWithBackground = styled.div`\
  display: flex;
  width: 100vw;
  flex-direction: column;
  background: url("/assets/team.png");
  background-clip: content-box;
  background-position: bottom;
  @media screen and (max-width: 1600px) {
    background-position: top;
    background-repeat: no-repeat;
  }
  @media screen and (max-width: 600px) {
    background-position: top;
    background-repeat: no-repeat;
  }

`;

const ValorTechText = styled.h1`
  margin: 0
`

const SloganText = styled.p`
  margin: 24px 0 0 0;
`

const DisclaimerText = styled.p`
  max-width: 600px;
  @media (max-width: 600px) {
    margin-top: 24px;
  }
  @media screen and (max-width: 1600px) {
    text-align: left;
    max-width: 400px;
  }
`

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
  @media (max-width: 600px) {
    flex-direction: column;
  }
  padding-top: 1rem;
`;
const MainPart = styled.div``;
const NavLinks = styled.ul`
  margin: 0;
  padding: 0;
  padding-right: 4rem;
  @media (max-width: 600px) {
    padding-right: 0;
  }
  display: flex;
`;
const NavLink = styled.li`
  list-style: none;
  padding: 1rem;
  display: flex;

  cursor: pointer;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;
const NavLogo = styled.img`
  padding-left: 5rem;
  height: 40px;
  width: 40px;
  @media (max-width: 600px) {
    padding-left: 0;
  }
`;
const Section = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-width: 350px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
  transition: transform 0.5s ease;
  transform: translateY(10px);
  color: white;

  margin: 2rem;
`;
const SectionText = styled.div`
  width: 40vw;
  @media (max-width: 600px) {
    width: auto;
  }
`;
const Footer = styled.div`
  padding-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background: #09090d;
  @media (max-width: 600px) {
    flex-direction: column-reverse;
  }
  width: 100%;
`;
const FooterText = styled.div`
  padding-left: 2rem;

  @media (max-width: 600px) {
    padding-right: 1rem;
    padding-left: 1rem;
    text-align: left;
  }
`;
const FooterIcons = styled.div`
  padding-right: 2rem;
  text-align: start;
  @media (max-width: 600px) {
    padding-right: 1rem;
    padding-left: 1rem;
  }
`;
const FooterIconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  gap: 20px;
`;
const TeamContainer = styled.div`
  position: relative;
  height: 1000px;
  @media (max-width: 600px) {
    height: 500px;
  }
`;

const TeamImage = styled.img`
  width: 100%;
  height: auto;
`;
const TeamDescrSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-top: 10rem;
    @media (max-width: 600px) {
      margin-top: 2rem;
      flex-direction: column;
    }
    @media screen and (max-width: 900px) {
      flex-direction: column;
      margin-top: 2rem;
      justify-content: center;
      align-items: center;
    }
`
const TeamSection = styled.div`
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: white;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7); /* Add a shadow effect to the text */
  padding: 6rem;
  @media (max-width: 600px) {
    font-size: 1.2rem;
    padding: 2rem;
    height: 100%;
  }
`;
const TeamSectionButtom = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;
const MotiText = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7); /* Add a shadow effect to the text */
`;
const MotiBackground = styled.div`
  background: linear-gradient(180deg, #102043 0%, #0C0D12 100%);
  width: 100%;
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
  FooterIcons,
  FooterText,
  FooterIconsContainer,
  NavLogo,
  MainPart,
  TeamImage,
  TeamSection,
  TeamSectionButtom,
  MotiText,
  MotiBackground,
  SectionText,
  ContainerWithBackground,
  TeamDescrSection,
  ValorTechText,
  DisclaimerText,
  SloganText
};
