import React from "react";
import "./styles/memory.css";
import {ScoreBoard} from "./ScoreBoard";
import logo from "./images/logo.png";

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="Old School Runescape Logo"></img>
            <h1 className="title">Memory Game</h1>
        </div>
    );
}

export {Header}