import React from "react";
import './LittlePhotoSelector.css';

export function LittlePhotoSelector(props) {
    
    const inactiveClass = "img-small";
    const activeClass = "img-small-selected";

    const thisClass = (props.active ? activeClass : inactiveClass) + ` thumbsize-${props.size}`;

    return (
        <img className={thisClass} src={props.src} alt="thumbnail photo" data-testid={`photo-selector`} onClick={props.onClick}/>
    )
}