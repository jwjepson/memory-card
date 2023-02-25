import React, {useState} from "react"
import { Card } from "./Card"
import "./styles/memory.css";
import rune from "./images/rune.png";
import gold from "./images/gold.png";
import reaper from "./images/reaper.png";
import wizardHat from "./images/wizardHat.png";
import chicken from "./images/chicken.png";

const Cards = () => {
    return (
        <div className="cards">
            <Card img={rune} name="Rune"/>
            <Card img={gold} name="Gold"/>
            <Card img={reaper} name="Grim Reaper"/>
            <Card img={wizardHat} name="Wizard Hat"/>
            <Card img={chicken} name="Chicken"/>
        </div>
    )
}

export {Cards};