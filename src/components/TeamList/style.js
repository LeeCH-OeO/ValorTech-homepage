import styled from "styled-components";

const TeamListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  @media (max-width: 600px) {
    flex-direction: column;
    align-content: center;
  }
  /* height: 90vh; */
  width: 100%;
`;
const TeamTitle = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7); /* Add a shadow effect to the text */
`;
const TeamMemberCard = styled.div`
  border: 1px solid #ccc;
  /* padding: 20px; */
  border-radius: 10px;
  width: 300px;
  position: relative;
  overflow: hidden;
  opacity: 0; /* Start with 0 opacity to hide the card */
  transform: translateY(10px); /* Slide down effect */
  background-color: white;
  color: black;
  &.show-card {
    opacity: 1;
    transform: translateY(0); /* Show the card with animation */
    transition: opacity 0.5s ease, transform 0.5s ease; /* Add smooth transition */
  }
`;
const TeamMemberInfo = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const TeamMemberName = styled.h2`
  font-size: 1.2rem;
  margin: 0;
  text-align: center;
`;
const TeamMemberTitle = styled.h2`
  font-size: 1rem;
  margin: 0;
`;
const TeamMemberIcon = styled.img`
  width: 350px;
  height: 350px;
`;
const TeamMemberEmail = styled.a`
  font-size: 0.8rem;
  color: #0077cc;
  text-decoration: none;
  display: inline-block;
`;

export {
  TeamListContainer,
  TeamMemberCard,
  TeamMemberIcon,
  TeamMemberEmail,
  TeamMemberName,
  TeamMemberInfo,
  TeamTitle,
  TeamMemberTitle,
};
