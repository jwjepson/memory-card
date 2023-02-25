import React, {useEffect, useState} from "react"
import { Card } from "./Card"
import "./styles/memory.css";
import rune from "./images/rune.png";
import gold from "./images/gold.png";
import reaper from "./images/reaper.png";
import wizardHat from "./images/wizardHat.png";
import chicken from "./images/chicken.png";
import bones from "./images/bones.png";
import dragonHelm from "./images/dragonHelm.png";
import fireCape from "./images/fireCape.png";
import spellBook from "./images/spellBook.png";
import santaHat from "./images/santaHat.png";

const Cards = (props) => {

    const [cards, setCards] = useState([
        {
            name: "Rune",
            img: rune,
        },
        {
            name: "Gold",
            img: gold,
        },
        {
            name: "Grim Reaper",
            img: reaper,
        },
        {
            name: "Wizard Hat",
            img: wizardHat,
        },
        {
            name: "Chicken",
            img: chicken,
        },
        {
            name: "Bones",
            img: bones,
        },
        {
            name: "Dragon Helm",
            img: dragonHelm,
        },
        {
            name: "Fire Cape",
            img: fireCape,
        },
        {
            name: "Spell Book",
            img: spellBook,
        },
        {
            name: "Santa Hat",
            img: santaHat,
        }
    ]);
    
    const shuffleCards = () => {
        const newArray = [...cards];
        newArray.sort(() => Math.random() - 0.5);
        setCards(newArray);
    }

    const handleCardClick = (e) => {
        shuffleCards();
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
                {cards.map(card => (
                    <Card handleCardClick={handleCardClick} img={card.img} name={card.name}/>
                ))}
            </div>
        </>
    )
}

export {Cards};