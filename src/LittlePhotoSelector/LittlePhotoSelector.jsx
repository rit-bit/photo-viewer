import React from "react";
import './LittlePhotoSelector.css';

export function LittlePhotoSelector(props) {
    
    const inactiveClass = "img-small";
    const activeClass = "img-small-selected";
    return (
        <img className={props.active ? activeClass : inactiveClass} src={props.src} alt="thumbnail photo" data-testid={`photo-selector`} onClick={props.onClick}/>
    )
}