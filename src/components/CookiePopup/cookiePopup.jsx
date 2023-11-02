import React, { useState } from "react";
import {
  DialogOverlay,
  DialogContainer,
  CookieButton,
  ButtonContainer,
} from "./style";

const CookiePopup = () => {
  const [isVisible, setIsVisible] = useState(
    !localStorage.getItem("cookieAccepted")
  );

  const handleAcceptClick = () => {
    setIsVisible(false);
    localStorage.setItem("cookieAccepted", "true");
  };
  const handleReject = () => {
    setIsVisible(false);
    localStorage.setItem("cookieAccepted", "false");
  };

  return (
    <>
      {isVisible && (
        <DialogOverlay>
          <DialogContainer open={isVisible} onClose={() => setIsVisible(false)}>
            <h1>Privacy Settings</h1>
            <p>
              We use cookie to enhance your browsing experience, serve
              personalized ads or content, and analyze out traffic. By clicking
              “Accept All”, you consent to use of cookies.
            </p>
            <ButtonContainer>
              <CookieButton onClick={handleReject}>Reject All</CookieButton>
              <CookieButton onClick={handleAcceptClick}>Customize</CookieButton>
              <CookieButton onClick={handleAcceptClick}>
                Accept All
              </CookieButton>
            </ButtonContainer>
          </DialogContainer>
        </DialogOverlay>
      )}
    </>
  );
};
export { CookiePopup };
