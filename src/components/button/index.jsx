/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import './button.css'

export default props => 
    <button 
        className={`
            button
            ${props.oparation ? `oparation` : ``}
            ${props.double ? `double` : ``}
            ${props.triple ? `triple` : ``}
        `}
        onClick={props.click(props.label)}
    >
        {props.label}
    </button>