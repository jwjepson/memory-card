import React, {useState} from "react";

const ScoreBoard = () => {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    return (
        <div className="scoreboard">
            <div className="current-score">Score: {score}</div>
            <div className="best-score">Best Score: {bestScore}</div>
        </div>
    );
}

export {ScoreBoard};