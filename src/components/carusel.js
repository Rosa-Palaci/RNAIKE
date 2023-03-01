// DOM
const swiper = document.querySelector("#swiper");
const like = document.querySelector("#like");
const dislike = document.querySelector("#dislike");

const urls = [
  "../assets/1.svg",
  "../assets/2.svg",
  "../assets/3.svg",
  "../assets/4.svg",
  "../assets/5.svg",
  "../assets/6.svg",
  "../assets/7.svg",
  "../assets/8.svg",
  "../assets/9.svg",
];

let cardCount = 0;

function appendNewCard() {
  const card = new Card({
    imageUrl: urls[cardCount % 5],
    onDismiss: appendNewCard,
    onLike: () => {
      like.style.animationPlayState = "running";
      like.classList.toggle("trigger");
    },
    onDislike: () => {
      dislike.style.animationPlayState = "running";
      dislike.classList.toggle("trigger");
    },
  });
  swiper.append(card.element);
  cardCount++;

  const cards = swiper.querySelectorAll(".card:not(.dismissing)");
  cards.forEach((card, index) => {
    card.style.setProperty("--i", index);
  });
}

for (let i = 0; i < 5; i++) {
  appendNewCard();
}
