import React, {useState} from "react";
import "./styles/memory.css";

const Card = (props) => {
    return (
        <div className="card">
            <img className="card-image" src={props.img} alt={props.name}></img>
            <div>{props.name}</div>
        </div>
    )
}

export {Card};