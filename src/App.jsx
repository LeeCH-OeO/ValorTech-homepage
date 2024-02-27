import React, {useRef} from "react";
import "animate.css";
import TeamList from "./components/TeamList/teamList";
import {
    ContainerWithBackground,
    DisclaimerText,
    Footer,
    FooterIcons,
    FooterIconsContainer,
    FooterText,
    GlobalStyle,
    MainContainer,
    MotiBackground,
    MotiText,
    Navbar,
    NavLink,
    NavLinks,
    NavLogo,
    Section,
    SectionText,
    SloganText,
    TeamContainer,
    TeamDescrSection,
    TeamSection,
    ValorTechText,
} from "./style";
import {CookiePopup} from "./components/CookiePopup/cookiePopup.jsx";

function App() {
    const teamRef = useRef(null);
    const sWorkflowsRef = useRef(null);
    const motivationRef = useRef(null);
    const contactRef = useRef(null);
    const scrollToSection = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({behavior: "smooth"});
            ref.current.style.transform = "translateY(0)";
        }
    };

    return (
        <>
            <CookiePopup/>
            <GlobalStyle/>
            <MainContainer>
                <ContainerWithBackground>
                    <Navbar>
                        <NavLogo src="/assets/logo/Logo.svg"/>
                        <NavLinks>
                            <NavLink onClick={() => scrollToSection(teamRef)}>Team</NavLink>
                            <NavLink onClick={() => scrollToSection(sWorkflowsRef)}>Smart Workflows</NavLink>
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
                            <TeamSection>
                                <TeamDescrSection>
                  <span
                      style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                      }}
                  >
                    <ValorTechText>We are ValorTech</ValorTechText>
                    <SloganText>Where Valor meets Technology</SloganText>
                  </span>
                                    <span
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "center",
                                        }}
                                    >
                    <DisclaimerText>
                      Disclaimer: We’re the university study group at TU
                      Chemnitz and don’t provide any services.
                    </DisclaimerText>
                  </span>
                                </TeamDescrSection>
                                <img
                                    onClick={() => scrollToSection(teamRef)}
                                    src={"/assets/arrow-down.svg"}
                                    className="animate__animated animate__fadeOut animate__infinite animate__slow"
                                    style={{cursor: "pointer", justifySelf: "flex-end"}}
                                />
                            </TeamSection>
                        </TeamContainer>
                    </div>

                    <Section ref={teamRef}>
                        <TeamList/>
                    </Section>
                    <div
                        style={{
                            width: "100%",
                            background: "linear-gradient(180deg, #010104 0%, #0F1F43 100%)",
                        }}
                    ></div>
                </ContainerWithBackground>
                <div
                    style={{
                        width: "100%",
                        background: "linear-gradient(180deg, #010104 0%, #0F1F43 100%)",
                    }}
                >
                    <Section>
                        <SectionText style={{fontSize: '1.3rem'}}>
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
                        <img src="/assets/logo/Logo.png" style={{width: "300px"}}/>
                    </Section>
                </div>
                <div
                    style={{
                        width: "100%",
                        background: "linear-gradient(180deg, #010104 0%, #0F1F43 100%)",
                    }}
                >
                    <Section ref={sWorkflowsRef}
                             style={{margin: 0, width: "100%", display: "flex", flexDirection: "column"}}>
                        <MotiText style={{alignItems: "center", width: "100%"}}>
                            <NavLink style={{fontSize: '3rem', display: 'flex'}} onClick={() => {
                                window.location.href = "https://workflows.valortech.de"
                            }}>Smart Workflows</NavLink>
                        </MotiText>
                        <SectionText style={{fontSize: '1.3rem', display: 'flex'}}>
                            <div>
                                <p ref={sWorkflowsRef}>
                                    We've spent the last few months preparing a platform for you.
                                    Yes, you read that right. For you!
                                </p>
                                <p>We are proud to present our first project. Drum roll...</p>
                                <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                                    <NavLink
                                        className={"animate__tada animate__animated animate__infinite animate__slow"}
                                        onClick={() => {
                                            window.location.href = "https://workflows.valortech.de"
                                        }}>Smart Workflows!</NavLink>
                                    <video style={{width: "100%"}} src={"assets/workspace-feature.mov"} autoPlay={true}
                                           loop={true} muted={true}/>
                                    <p>
                                        The motivation behind creating the platform is to help people develop BPMN
                                        diagrams faster.
                                        We also allow people to share their work with other users.
                                        Check it out right now! You can always find it at
                                    </p>
                                    <a href={"https://workflows.valortech.de"}>workflows.valortech.de</a>
                                    <p>
                                        I can see that you are very interested in this project now that you are here.
                                        There is one thing I can tell you in confidence, but don't tell anyone.
                                    </p>
                                    <video style={{width: "100%"}} src={"assets/ai-feature.mov"} autoPlay={true}
                                           loop={true} muted={true}/>
                                    <p>There is an AI assistant exist.</p>
                                    <p>
                                        "Yeah, yeah, another new chatbot," you may think. But have you ever drawn BPMN
                                        diagrams? It can take quite a long time. Now you can do it in seconds.
                                    </p>
                                    <p></p>

                                </div>
                            </div>
                        </SectionText>
                    </Section>
                </div>
                <MotiBackground>
                    <MotiText>
                        <h1 ref={motivationRef}>Motivation</h1>
                    </MotiText>
                    <Section>
                        <img
                            src="/assets/tu-chemnitz.svg"
                            style={{width: "300px"}}
                            alt={"TU Chemnitz Logo"}
                        />
                        <SectionText>
                            <p style={{fontSize: '1.3rem'}}>
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
                        <SectionText style={{fontSize: '1.3rem'}}>
                            <p>
                                Under the guidance of our dedicated supervisors from the VSR
                                Professorship, we are excited to embark on this educational
                                path, leveraging their expertise to navigate the complex
                                landscape of web engineering. Our journey is fueled by
                                curiosity, determination, and a desire to learn and grow
                                together.
                            </p>
                        </SectionText>{" "}
                        <img src="/assets/vsr.png" style={{width: "300px"}}/>
                    </Section>
                </MotiBackground>

                <Footer ref={contactRef}>
                    <FooterText>
                        <strong>Disclaimer</strong>
                        <p>
                            This website does not belong to a real company.
                            <br/> It is a Planspiel Web Engineering project at University of
                            Technology Chemnitz.
                        </p>
                        <strong>Impressum</strong>
                        <p>
                            This website is provided by: Chi-Hsuan Lee
                            <br/> Address: Vettersstraße 52, 09126 Chemnitz, Germany
                            <br/> Contact Email:
                            <a
                                href="mailto:impressum@valortech.de"
                                style={{textDecoration: "none"}}
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
                                    src="/assets/logo/facebook.svg"
                                    style={{width: "32px", height: "32px"}}
                                />
                            </a>
                            <a href="https://twitter.com/valor_tech">
                                <img
                                    src="/assets/logo/twitterx.svg"
                                    style={{width: "32px", height: "32px"}}
                                />
                            </a>
                        </FooterIconsContainer>
                        <p>
                            <strong>Contact Us: </strong>
                            <br/>
                            <a
                                href="mailto:contact@valortech.de"
                                style={{textDecoration: "none"}}
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
