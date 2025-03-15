import React from "react";
import "./typography.css"

export enum Size{
    SMALL = "small",
    MEDIUM = "medium",
    LARGE = "large"
}

interface CommonTypographyInterface {
    label: string;
    style?: React.CSSProperties;
    size?: Size;
}

export const CommonTypography = ({style, label, size}: CommonTypographyInterface) => {
    // return <label style={style}>{label}</label>;
    return  (
        <label className = {"typography-style " + size} style = {style}>
            {label}
        </label>
    );
};