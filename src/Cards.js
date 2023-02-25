import React, {useState} from "react"
import { Card } from "./Card"
import "./styles/memory.css";
import rune from "./images/rune.png";
import gold from "./images/gold.png";
import reaper from "./images/reaper.png";
import wizardHat from "./images/wizardHat.png";
import chicken from "./images/chicken.png";
import {ScoreBoard} from "./ScoreBoard";

const Cards = (props) => {
    
    const handleCardClick = (e) => {
        if (!props.selectedCards.includes(e.target.parentNode.dataset.name)) {
            props.setSelectedCards(props.selectedCards.concat(e.target.parentNode.dataset.name));
            props.setCurrentScore(props.currentScore + 1);
        } else {
            props.resetGame()
        }
    }

    return (
        <>
            <div className="cards">
                <Card handleCardClick={handleCardClick} img={rune} name="Rune"/>
                <Card handleCardClick={handleCardClick} img={gold} name="Gold"/>
                <Card handleCardClick={handleCardClick} img={reaper} name="Grim Reaper"/>
                <Card handleCardClick={handleCardClick} img={wizardHat} name="Wizard Hat"/>
                <Card handleCardClick={handleCardClick} img={chicken} name="Chicken"/>
            </div>
        </>
    )
}

export {Cards};