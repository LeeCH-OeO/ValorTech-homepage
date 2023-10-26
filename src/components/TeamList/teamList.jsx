import styled from "styled-components";
import React, { useEffect, useState } from "react";
import {
  TeamListContainer,
  TeamMemberCard,
  TeamMemberIcon,
  TeamMemberEmail,
  TeamMemberName,
  TeamMemberInfo,
} from "./style";

const TeamList = () => {
  const teamMembers = [
    {
      name: "Anton Stepanets",
      icon: "/assets/profile_pic/Anton.jpg",
      email: "anton.stepanets@s2022.tu-chemnitz.de",
    },
    {
      name: "Byungwoo Kim",
      icon: "/assets/profile_pic/Byungwoo.jpg",
      email: "byungwoo.kim@s2022.tu-chemnitz.de",
    },
    {
      name: "Chi-Hsuan Lee",
      icon: "/assets/profile_pic/Chi-Hsuan.jpg",
      email: "chi-hsuan.lee@s2022.tu-chemnitz.de",
    },
    {
      name: "Lev Kuznetsov",
      icon: "/assets/profile_pic/Lev.jpg",
      email: "lev.kuznetsov@s2022.tu-chemnitz.de",
    },
    {
      name: "Mozhdeh Ahmadi Nadoushan",
      icon: "/assets/profile_pic/Mozhdeh.jpg",
      email: "mozhdeh.ahmadi-nadoushan@s2022.tu-chemnitz.de",
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
    <TeamListContainer>
      {teamMembers.map((member, index) => (
        <TeamMemberCard className={showCard > index ? "show-card" : ""}>
          <TeamMemberIcon src={member.icon} alt={`${member.name}'s icon`} />
          <TeamMemberInfo>
            <TeamMemberName>{member.name}</TeamMemberName>
            <TeamMemberEmail href={`mailto:${member.email}`}>
              <span class="material-symbols-outlined">mail</span>
            </TeamMemberEmail>
          </TeamMemberInfo>
        </TeamMemberCard>
      ))}
    </TeamListContainer>
  );
};

export default TeamList;
