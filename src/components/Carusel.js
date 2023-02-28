import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { cards } from "../assets/cards";

const Carusel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {cards.map((card) => (
        <div key={card.id}>
          <img src={card.image} alt="card" />
        </div>
      ))}
    </Slider>
  );
};

export default Carusel;
