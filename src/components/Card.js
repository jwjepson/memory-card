import React from "react";
import "../styles/memory.css";

const Card = (props) => {

    return (
        <div onClick={props.handleCardClick} data-name={props.name} className="card">
            <img className="card-image" src={props.img} alt={props.name}></img>
            <div className="card-title">{props.name}</div>
        </div>
    )
}

export {Card};