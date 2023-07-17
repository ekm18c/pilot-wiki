function flipCard(card) {
  card.classList.toggle("flipped");
}
const fishContainer = document.querySelector('.fish-container');
const banner = document.querySelector('.banner');
const bannerText = document.querySelector('.banner h2');

const containerRect = fishContainer.getBoundingClientRect();
const bannerRect = banner.getBoundingClientRect();

fishContainer.addEventListener('mousemove', (event) => {
  const mouseX = event.clientX - containerRect.left;
  const mouseY = event.clientY - containerRect.top;

  const bannerX = mouseX - bannerRect.width / 2;
  const bannerY = mouseY - bannerRect.height / 2;

  banner.style.transform = `translate(${bannerX}px, ${bannerY}px)`;
});

fishContainer.addEventListener('mouseleave', () => {
  banner.style.transform = 'translate(-50%, -50%)';
  banner.classList.remove('show');
});

fishContainer.addEventListener('mouseenter', () => {
  banner.classList.add('show');
});
