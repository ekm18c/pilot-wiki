function flipCard(card) {
    card.classList.toggle("flipped");
}
const container = document.querySelector('.container');
const overlay = document.querySelector('.banner');

container.addEventListener('mouseover', () => {
  overlay.style.opacity = 1;
});

container.addEventListener('mouseout', () => {
  overlay.style.opacity = 0;
});
