import styled from "styled-components";
import React, { useEffect, useState } from "react";
import {
  TeamListContainer,
  TeamMemberCard,
  TeamMemberIcon,
  TeamMemberEmail,
  TeamMemberName,
  TeamMemberInfo,
  TeamTitle,
  TeamMemberTitle,
} from "./style";

const TeamList = () => {
  const teamMembers = [
    {
      name: "Anton Stepanets",
      icon: "/assets/profile_pic/Anton.jpg",
      email: "anton.stepanets@s2022.tu-chemnitz.de",
      title: "Fullstack engineer",
    },
    {
      name: "Byungwoo Kim",
      icon: "/assets/profile_pic/Byungwoo.jpg",
      email: "byungwoo.kim@s2022.tu-chemnitz.de",
      title: "Fullstack engineer",
    },
    {
      name: "Chi-Hsuan Lee",
      icon: "/assets/profile_pic/Chi-Hsuan.jpg",
      email: "chi-hsuan.lee@s2022.tu-chemnitz.de",
      title: "Fullstack engineer",
    },
    {
      name: "Lev Kuznetsov",
      icon: "/assets/profile_pic/Lev.jpg",
      email: "lev.kuznetsov@s2022.tu-chemnitz.de",
      title: "Fullstack engineer",
    },
    {
      name: "Mozhdeh Ahmadi Nadoushan",
      icon: "/assets/profile_pic/Mozhdeh.jpg",
      email: "mozhdeh.ahmadi-nadoushan@s2022.tu-chemnitz.de",
      title: "Fullstack engineer",
    },
    // Add more team members as needed
  ];

  const [showCard, setShowCard] = useState(0);

  useEffect(() => {
    const cardDelay = 500; // Delay between showing each card in milliseconds

    const timer = setInterval(() => {
      if (showCard < teamMembers.length) {
        setShowCard(showCard + 1);
      } else {
        clearInterval(timer);
      }
    }, cardDelay);

    return () => clearInterval(timer);
  }, [showCard, teamMembers.length]);

  return (
    <div style={{width: "100%", display: "flex", flexDirection: "column"}}>
      <TeamTitle>
        <h1>OurTeam</h1>
      </TeamTitle>
      <TeamListContainer style={{width: "100%"}}>
        {teamMembers.map((member, index) => (
          <TeamMemberCard className={showCard > index ? "show-card" : ""}>
            <TeamMemberIcon src={member.icon} alt={`${member.name}'s icon`} />
            <TeamMemberInfo>
              <TeamMemberName>{member.name}</TeamMemberName>
              <TeamMemberTitle>{member.title}</TeamMemberTitle>
              <TeamMemberEmail href={`mailto:${member.email}`}>
                {member.email}
              </TeamMemberEmail>
            </TeamMemberInfo>
          </TeamMemberCard>
        ))}
      </TeamListContainer>
    </div>
  );
};

export default TeamList;
