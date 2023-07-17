function flipCard(card) {
  card.classList.toggle("flipped");
}
function flipCard(card) {
  card.classList.toggle("flipped");
}
const fishContainer = document.querySelector('.fish-container');
const banner = document.querySelector('.banner');
const bannerText = document.querySelector('.banner h2');

fishContainer.addEventListener('mouseover', () => {
  bannerText.style.opacity = 1; // Show the banner text
});

fishContainer.addEventListener('mouseout', () => {
  bannerText.style.opacity = 0; // Hide the banner text
});
