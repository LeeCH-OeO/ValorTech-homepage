import './module.styles.css';
import React from "react";
const Button = (props) => (
    <button  onClick={props.onClick} className={"company-button"}>
        <p style={{margin: 0}}>{props.label}</p>
    </button>
)

export {Button}