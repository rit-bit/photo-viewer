import React from "react";
import './BigPhotoViewer.css';

export function BigPhotoViewer(props) {
    return (
        <img src={props.src}></img>
    )
}