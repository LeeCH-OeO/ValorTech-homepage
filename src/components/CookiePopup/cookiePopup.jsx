import React, {useRef, useState} from 'react';
import Popup from 'reactjs-popup';
import {Button} from "../Button/button.jsx";
import './module.styles.css';
const CookiePopup = () => {
    const [open, setOpen] = useState(true);
    const closeModal = () => {
        setOpen(false);
    };
    return (
        <Popup contentStyle={{position: "absolute", left: 0, bottom: 0}} overlayStyle={{position: "absolute", left: 0, bottom: 0}}  open={open} modal nested position="bottom left" onClose={closeModal}>
            {close => (
                <div
                    className={"animate__animated animate__fadeIn popup-container"}

                >
                    <h1>Privacy Settings</h1>
                    <p>
                        We use cookie to enhance your browsing experience,
                        serve personalized ads or content, and analyze out traffic.
                        By clicking “Accept All”, you consent to use of cookies.
                    </p>
                    <div style={{display: "flex", flexDirection: "row", gap: "20px"}}>
                        <Button onClick={closeModal} label="Customize"/>
                        <Button onClick={closeModal} label="Reject All"/>
                        <Button onClick={closeModal} label="Accept All"/>
                    </div>
                </div>
            )}
        </Popup>
    );
};

export default CookiePopup