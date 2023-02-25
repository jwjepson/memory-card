import React, {useState} from "react";
import "./styles/memory.css";
import {Cards} from "./Cards";
import {ScoreBoard} from "./ScoreBoard";

const Main = () => {
    const [selectedCards, setSelectedCards] = useState([]);
    const [currentScore, setCurrentScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    const resetGame = () => {
        if (bestScore < currentScore) {
            setBestScore(currentScore);
        }
        setCurrentScore(0);
        setSelectedCards([]);
    }
    return (
        <div className="main">
            <ScoreBoard currentScore={currentScore} bestScore={bestScore}/>
            <Cards resetGame={resetGame} 
            selectedCards={selectedCards} 
            setSelectedCards={setSelectedCards} 
            setCurrentScore={setCurrentScore} 
            currentScore={currentScore} 
            bestScore={bestScore}
            setBestScore={setBestScore}/>
        </div>
    )
}

export {Main}