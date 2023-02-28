// libraries
import React, { useState } from "react";

// components.
import Header from "../components/Header";
import "../components/Landing.css";

// data
import { cards } from "../assets/cards";

function Landing() {
  const [cardsState, setCardsState] = useState(cards);
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentCard = cardsState[currentIndex];

  const handleLike = () => {
    const updatedCards = cardsState.map((card, index) => {
      if (index === currentIndex) {
        return {
          ...card,
          liked: true,
        };
      }
      return card;
    });
    setCardsState(updatedCards);
    setCurrentIndex(currentIndex + 1);
  };

  const handleDislike = () => {
    const updatedCards = cardsState.map((card, index) => {
      if (index === currentIndex) {
        return {
          ...card,
          disliked: true,
        };
      }
      return card;
    });
    setCardsState(updatedCards);
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <>
      <Header />
      <div className="card-container">
        {cardsState.map((item) => (
          <div
            key={item.id}
            className={`card ${
              item.liked ? "like" : item.disliked ? "dislike" : ""
            } ${item.liked || item.disliked ? "hide" : ""}`}
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="card-action">
              <button
                className="dislike"
                onClick={() => handleDislike(item.id)}
              >
                DisLike
              </button>
              <button className="like" onClick={() => handleLike(item.id)}>
                Like
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Landing;
