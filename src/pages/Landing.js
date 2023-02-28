// libraries
import React from "react";

// components.
import Header from "../components/Header";

// data
import { cards } from "../assets/cards";

function Landing() {
  return (
    <>
      <Header />
      {cards.map((item) => {
        return (
          <div key={item.id}>
            <img src={item.image} alt="icon" width={100} />
          </div>
        );
      })}
    </>
  );
}

export default Landing;
