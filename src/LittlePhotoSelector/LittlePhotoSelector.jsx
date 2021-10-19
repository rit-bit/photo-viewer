import React from "react";
import './LittlePhotoSelector.css';

export function LittlePhotoSelector(props) {
    return (
        <img className={"img-small"} src={props.src}></img>
    )
}