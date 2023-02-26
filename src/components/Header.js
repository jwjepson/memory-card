import React from "react";
import "../styles/memory.css";
import logo from "../images/logo.png";
import { ScoreBoard } from "./ScoreBoard";

const Header = (props) => {
    return (
        <div className="header">
            <div className="header-info">
                <img src={logo} alt="Old School Runescape Logo"></img>
                <h1 className="title">Memory Game</h1>
            </div>
            <ScoreBoard currentScore={props.currentScore} bestScore={props.bestScore}/>
        </div>
    );
}

export {Header}