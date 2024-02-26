import styled, { keyframes } from "styled-components";
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const DialogOverlay = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: ${fadeIn} 0.5s ease-in;
`;

const DialogContainer = styled.dialog`
  background-color: #fff;
  padding: 20px;
  border-radius: 9px;
  max-width: 484px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  @media (max-width: 600px) {
    max-width: 300px;
  }
`;

const CookieButton = styled.button`
  border-radius: 23px;
  border: 1px solid #62b3d2;
  display: flex;
  width: 133px;
  height: 44px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: #fff;
  color: #62b3d2;

  &:hover {
    background: #62b3d2;
    color: white;
  }
`;
const ButtonContainer = styled.div`
  flex-direction: row;
  gap: 20px;
  display: flex;
  @media (max-width: 600px) {
    max-width: 300px;
  }
`;
export { DialogOverlay, DialogContainer, CookieButton, ButtonContainer };
