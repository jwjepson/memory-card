import React from "react";
import "../styles/memory.css";
import {Cards} from "./Cards";

const Main = (props) => {
    return (
        <div className="main">
            <Cards resetGame={props.resetGame} 
            selectedCards={props.selectedCards} 
            setSelectedCards={props.setSelectedCards} 
            setCurrentScore={props.setCurrentScore} 
            currentScore={props.currentScore} 
            bestScore={props.bestScore}
            setBestScore={props.setBestScore}/>
        </div>
    )
}

export {Main}