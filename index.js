const participantCard = document.querySelectorAll(".participants-card");
let currentIndex = 0;

function goToSlide(index) {
  if (index < 0) {
    index = participantCard.length - 1;
  } else if (index === 4) {
    index = 0;
  }
  currentIndex = index;
  document.querySelector(
    ".participants-carusel-inner"
  ).style.transform = `translateX(-${index * 30}vw)`;
}

function goToNextSlide() {
  goToSlide(currentIndex + 1);
}

function goToPrevSlide() {
  goToSlide(currentIndex - 1);
}

setInterval(goToNextSlide, 4000);
