import React, {useState} from "react";
import scoreBackground from "./images/scroll-background.png";

const ScoreBoard = (props) => {
    return (
        <div className="scoreboard">
            <img className="score-background" src={scoreBackground}></img>
            <div className="current-score">Score: {props.currentScore}</div>
            <div className="best-score">Best Score: {props.bestScore}</div>
        </div>
    );
}

export {ScoreBoard};