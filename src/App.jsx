import React, { useRef, useState } from "react";
import TeamList from "./components/TeamList/teamList";
import {
  MainContainer,
  Section,
  Navbar,
  NavLinks,
  NavLink,
  TeamContainer,
  GlobalStyle,
  Footer,
  FooterText,
  FooterIcons,
  FooterIconsContainer,
  NavLogo,
  TeamImage,
  TeamSection,
  MotiText,
  MotiBackground,
  SectionText,
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
        <div>
          <TeamContainer>
            {" "}
            <TeamImage src="/assets/team.png" />
            <TeamSection>
              <span style={{ display: "inline-block" }}>
                <h1>We are ValorTech</h1>
                <p>Where Valor meets Technology</p>
              </span>
            </TeamSection>
          </TeamContainer>
        </div>

        <Section ref={teamRef}>
          <TeamList />
        </Section>
        <div style={{ width: "100%" }}>
          <Section>
            <SectionText>
              <p>
                At ValorTech, we believe that courage is the foundation of
                progress. It's the audacity to embrace challenges, the tenacity
                to persevere through adversity, and the unwavering commitment to
                always strive for excellence. With competence as our guiding
                star, we embark on a journey to shape the future of technology,
                all while upholding our core values of innovation, integrity,
                and resilience.
              </p>
            </SectionText>
            <img src="/assets/logo/Logo.png" style={{ width: "300px" }} />
          </Section>
        </div>
        <MotiBackground>
          <MotiText>
            <h1 ref={motivationRef}>Motivation</h1>
          </MotiText>
          <Section>
            <img src="/assets/tu-chemnitz.svg" style={{ width: "300px" }}  alt={"TU Chemnitz Logo"}/>
            <SectionText>
              <p>
                At ValorTech, we are a group of students from the TU Chemnitz,
                driven by a common purpose - to explore the intricacies of
                technology and web development. As part of our winter semester
                2023/2024 Planspiel Project, we adopted the name ValorTech to
                symbolize our commitment to courage, competence, and progress.
                With values rooted in innovation and excellence, we aim to delve
                into the world of web engineering, push our boundaries, and gain
                practical insights.
              </p>
            </SectionText>
          </Section>
          <Section>
            <SectionText>
              <p>
                Under the guidance of our dedicated supervisors from the VSR
                Professorship, we are excited to embark on this educational
                path, leveraging their expertise to navigate the complex
                landscape of web engineering. Our journey is fueled by
                curiosity, determination, and a desire to learn and grow
                together.
              </p>
            </SectionText>{" "}
            <img src="public/assets/vsr.png" style={{ width: "300px" }} />
          </Section>
        </MotiBackground>

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
