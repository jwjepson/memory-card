import React from "react";
import "./styles/memory.css";
import {ScoreBoard} from "./ScoreBoard";

const Header = () => {
    return (
        <div className="header">
            <h1 className="title">Memory Game</h1>
            <ScoreBoard/>
        </div>
    );
}

export {Header}