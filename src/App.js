import { useEffect, useState } from "react";
import "./App.css";
import SingleCard from "./components/SingleCard";

const cardImages = [
  { src: "/img/helmet-1.png", matched: false },
  { src: "/img/potion-1.png", matched: false },
  { src: "/img/ring-1.png", matched: false },
  { src: "/img/scroll-1.png", matched: false },
  { src: "/img/shield-1.png", matched: false },
  { src: "/img/sword-1.png", matched: false },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choice1, setChoice1] = useState(null);
  const [choice2, setChoice2] = useState(null);

  // shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() * 100000 }));
    setCards(shuffledCards);
    setTurns(0);
  };
  // handle choice selection\
  const handleChoice = (card) => {
    choice1 ? setChoice2(card) : setChoice1(card);
  };

  // compare 2 selected cards
  useEffect(() => {
    if (choice1 && choice2) {
      if (choice1.src === choice2.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choice1.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
      } else {
      }
      resetTurn();
    }
  }, [choice1, choice2]);

  const resetTurn = () => {
    setTimeout(() => {
      setChoice1(null);
      setChoice2(null);
    }, 1000);
    setTurns((prevTurns) => prevTurns + 1);
  };

  return (
    <div className="App">
      <h1>Magic Memory</h1>
      <button onClick={shuffleCards}>Play Again</button>

      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard
            card={card}
            key={card.id}
            handleChoice={handleChoice}
            flipped={card === choice1 || card === choice2 || card.matched}
          />
        ))}
      </div>

      <p>Turns: {turns}</p>
    </div>
  );
}

export default App;
