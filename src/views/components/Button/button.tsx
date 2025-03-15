import React from "react";
import "./button.css"


interface ButtonInterface {
    label:string;
    style?: React.CSSProperties;
    onClick?: () => void;
    onClickSamp?: VoidFunction;
}

export const Button = ({style, label, onClick}: ButtonInterface) => {
    return  (
        <button className = {"button-style "} style = {style} onClick={onClick}>
            {label}
        </button>
    );
};