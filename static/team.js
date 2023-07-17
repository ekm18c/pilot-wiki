function flipCard(card) {
  card.classList.toggle("flipped");
}
const fishContainer = document.querySelector('.fish-container');
const banner = document.querySelector('.banner');
const bannerText = document.querySelector('.banner h2');

fishContainer.addEventListener('mouseover', () => {
  banner.classList.add('show');
});

fishContainer.addEventListener('mouseout', () => {
  banner.classList.remove('show');
});
