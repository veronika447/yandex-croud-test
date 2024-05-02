const participantCard = document.querySelectorAll(".participants-card");
const participantArrowRight = document.querySelectorAll(
  ".participant-arrow-right"
);
const participantArrowLeft = document.querySelectorAll(
  ".participant-arrow-left"
);
const actualPageDesktop = document.querySelector(".actual-page-desktop");
const actualPageMobile = document.querySelector(".actual-page-mobile");
actualPageMobile.textContent = 1;

let currentIndex = 0;

function goToSlide(index) {
  if (index < 0) {
    index = participantCard.length - 1;
    // participantArrowLeft.forEach((el) => el.classList.add("arrow-inactive"));
  }
  currentIndex = index;
  // participantArrowLeft.forEach((el) => el.classList.remove("arrow-inactive"));
  if (document.body.clientWidth < 1366) {
    if (index >= participantCard.length) {
      // participantArrowRight.forEach((el) => el.classList.add("arrow-inactive"));
      index = 0;
    }
    actualPageMobile.textContent = index + 1;
    document.querySelector(
      ".participants-carusel-inner"
    ).style.transform = `translateX(-${index * 88}vw)`;
  } else {
    if (index >= participantCard.length - 2) {
      // participantArrowRight.forEach((el) => el.classList.add("arrow-inactive"));
      index = 0;
    }
    actualPageDesktop.textContent = index + 3;
    document.querySelector(
      ".participants-carusel-inner"
    ).style.transform = `translateX(-${index * 30}vw)`;
  }
}

function goToNextSlide() {
  goToSlide(currentIndex + 1);
}

function goToPrevSlide() {
  goToSlide(currentIndex - 1);
}

setInterval(goToNextSlide, 4000);

participantArrowRight.forEach((el) =>
  el.addEventListener("click", goToNextSlide)
);

participantArrowLeft.forEach((el) =>
  el.addEventListener("click", goToPrevSlide)
);
