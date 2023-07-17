function flipCard(card) {
  card.classList.toggle("flipped");
}
const fishContainer = document.querySelector('.fish-container');
const banner = document.querySelector('.banner');

fishContainer.addEventListener('mouseover', () => {
  banner.style.opacity = 1;
});

fishContainer.addEventListener('mouseout', () => {
  banner.style.opacity = 0;
});
