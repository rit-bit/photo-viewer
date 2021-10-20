import React from "react";
import './BigPhotoViewer.css';

export function BigPhotoViewer(props) {
    return (
        <img className={"img-large"} src={props.src} alt="big photo viewer"></img>
    )
}