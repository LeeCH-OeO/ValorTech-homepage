import {useNavigate, useRouteError} from "react-router-dom";
import {GlobalStyle} from "./style.js";
import React from "react";
import {CookieButton} from "./components/CookiePopup/style.js";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);
    const navigate = useNavigate();
    return (
        <>
            <GlobalStyle/>
            <div style={{
                width: "100%", height: "100vh",
                background: 'rgba(0, 0, 0, .65) url("/assets/team.png")',
                backgroundClip: "content-box",
                backgroundPosition: "bottom",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundBlendMode: "darken",
            }}>
                <h1 style={{margin: 0, fontSize: "15rem", color: "white"}}>404</h1>
                <p style={{margin: 0, fontSize: "5rem", color: "white"}}>Page not found</p>
                <CookieButton style={{marginTop: "20px"}} onClick={()=> navigate("/")}>Back to main page</CookieButton>
            </div>
        </>
    );
}