function flipCard(card) {
  card.classList.toggle("flipped");
}

const fishContainer = document.querySelector('.fish-container');
const fadingEffect = document.querySelector('.fading-effect');

fishContainer.addEventListener('animationend', revealText);

function revealText() {
  fadingEffect.classList.add('fading-effect-reveal');
}
