import { Header } from "./Header";
import {Main} from "./Main";
import { Footer } from "./Footer";
import "./styles/memory.css";
import React, {useState} from "react";

function App() {
  const [selectedCards, setSelectedCards] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const resetGame = () => {
      if (bestScore < currentScore) {
          setBestScore(currentScore);
      }
      setCurrentScore(0);
      setSelectedCards([]);
  };

  return (
    <div className="app">
      <Header currentScore={currentScore} bestScore={bestScore}/>
      <Main resetGame={resetGame} 
            selectedCards={selectedCards} 
            setSelectedCards={setSelectedCards} 
            setCurrentScore={setCurrentScore} 
            currentScore={currentScore} 
            bestScore={bestScore}
            setBestScore={setBestScore}/>
      <Footer/>
    </div>
  );
}

export default App;
