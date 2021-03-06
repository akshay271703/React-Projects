import "./SingleCard.css";
export default function SIngleCard({ card, handleChoice, flipped }) {
  const handleClick = () => {
    handleChoice(card);
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card-front" />
        <img
          src="./img/cover.png"
          className="back"
          onClick={handleClick}
          alt="card-back"
        />
      </div>
    </div>
  );
}
