import React, { useRef, useState } from "react";
import TeamList from "./components/TeamList/teamList";
import {
  MainContainer,
  Section,
  Navbar,
  NavLinks,
  NavLink,
  TeamContainer,
  TeamImage,
  TeamText,
  GlobalStyle,
  Footer,
  FooterText,
  FooterIcons,
  FooterIconsContainer,
  NavLogo,
} from "./style";
function App() {
  const teamRef = useRef(null);
  const motivationRef = useRef(null);
  const contactRef = useRef(null);
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      ref.current.style.transform = "translateY(0)";
    }
  };

  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <Navbar>
          <NavLogo src="/assets/logo/Logo.svg" />
          <NavLinks>
            <NavLink onClick={() => scrollToSection(teamRef)}>Team</NavLink>
            <NavLink onClick={() => scrollToSection(motivationRef)}>
              Motivation
            </NavLink>
            <NavLink onClick={() => scrollToSection(contactRef)}>
              Contact
            </NavLink>
          </NavLinks>
        </Navbar>

        <TeamContainer>
          <TeamImage src="/assets/team.png" />
          <TeamText>
            <span style={{ display: "inline-block" }}>
              <strong>We are ValorTech</strong>
            </span>
            <br />
            <span style={{ display: "inline-block" }}>
              <small>Where Valor meets Technology</small>
            </span>
          </TeamText>
        </TeamContainer>
        <h1 ref={teamRef}>Team members</h1>
        <Section>
          <TeamList />
        </Section>
        <Section>
          <p>
            At ValorTech, we believe that courage is the foundation of progress.
            It's the audacity to embrace challenges, the tenacity to persevere
            through adversity, and the unwavering commitment to always strive
            for excellence. With competence as our guiding star, we embark on a
            journey to shape the future of technology, all while upholding our
            core values of innovation, integrity, and resilience.
          </p>
          <img src="/assets/logo/Logo.png" style={{ width: "50%" }} />
        </Section>
        <h1 ref={motivationRef}>Motivation</h1>
        <Section>
          <img src="/assets/motivation_1.png" style={{ width: "50%" }} />
          <p style={{ padding: "1rem" }}>
            At ValorTech, we believe that courage is the foundation of progress.
            It's the audacity to embrace challenges, the tenacity to persevere
            through adversity, and the unwavering commitment to always strive
            for excellence. With competence as our guiding star, we embark on a
            journey to shape the future of technology, all while upholding our
            core values of innovation, integrity, and resilience.
          </p>
        </Section>
        <Section>
          <p style={{ padding: "1rem" }}>
            At ValorTech, we believe that courage is the foundation of progress.
            It's the audacity to embrace challenges, the tenacity to persevere
            through adversity, and the unwavering commitment to always strive
            for excellence. With competence as our guiding star, we embark on a
            journey to shape the future of technology, all while upholding our
            core values of innovation, integrity, and resilience.
          </p>
          <img src="/assets/motivation_1.png" style={{ width: "50%" }} />
        </Section>
        <Footer ref={contactRef}>
          <FooterText>
            <strong>Disclaimer</strong>
            <p>
              This website does not belong to a real company.
              <br /> It is a Planspiel Web Engineering project at University of
              Technology Chemnitz.
            </p>
            <strong>Impressum</strong>
            <p>
              This website is provided by: Chi-Hsuan Lee
              <br /> Address: Vettersstraße 52, 09126 Chemnitz, Germany
              <br /> Contact Email:
              <a
                href="mailto:impressum@valortech.de"
                style={{ textDecoration: "none" }}
              >
                {" "}
                impressum@valortech.de
              </a>
            </p>
          </FooterText>
          <FooterIcons>
            <p>
              <strong>Follow Us:</strong>
            </p>
            <FooterIconsContainer>
              <a href="https://www.facebook.com/profile.php?id=61552913003419">
                <img
                  src="/assets/logo/Facebook_Logo_Secondary.png"
                  style={{ width: "32px", height: "32px" }}
                />
              </a>
              <a href="https://twitter.com/valor_tech">
                <img
                  src="/assets/logo/logo-white.png"
                  style={{ width: "32px", height: "32px" }}
                />
              </a>
            </FooterIconsContainer>
            <p>
              <strong>Contact Us: </strong>
              <br />
              <a
                href="mailto:contact@valortech.de"
                style={{ textDecoration: "none" }}
              >
                contact@valortech.de
              </a>
            </p>
          </FooterIcons>
        </Footer>
      </MainContainer>
    </>
  );
}

export default App;
