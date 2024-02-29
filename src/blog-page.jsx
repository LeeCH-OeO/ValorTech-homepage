import {useNavigate, useRouteError} from "react-router-dom";
import {GlobalStyle} from "./style.js";
import React from "react";
import {CookieButton} from "./components/CookiePopup/style.js";

export default function BlogPage() {
    const error = useRouteError();
    console.error(error);
    const navigate = useNavigate();
    return (
        <>
            <GlobalStyle/>
            <div style={{
            }}>
            </div>
        </>
    );
}