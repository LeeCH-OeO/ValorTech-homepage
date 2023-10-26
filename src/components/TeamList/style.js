import styled from "styled-components";

const TeamListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const TeamMemberCard = styled.div`
  border: 1px solid #ccc;
  /* padding: 20px; */
  border-radius: 10px;
  width: 350px;
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
`;

const TeamMemberIcon = styled.img`
  width: 350px;
  height: 350px;
`;
const TeamMemberEmail = styled.a`
  font-size: 1rem;
  color: #0077cc;
  text-decoration: none;
  display: inline-block;
  padding: 5px;

  &:hover {
    border-radius: 50%; /* Create a circle with border-radius */
    transition: background-color 0.3s; /* Add a transition for a smooth hover effect */
    background-color: gray;
  }
`;

export {
  TeamListContainer,
  TeamMemberCard,
  TeamMemberIcon,
  TeamMemberEmail,
  TeamMemberName,
  TeamMemberInfo,
};
