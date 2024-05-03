const participantCard = document.querySelectorAll(".participants-card");
const participantCarusel = document.querySelector(
  ".participants-carusel-inner"
);
const participantArrowRight = document.querySelectorAll(
  ".participant-arrow-right"
);
const participantArrowLeft = document.querySelectorAll(
  ".participant-arrow-left"
);
const actualPageDesktop = document.querySelector(".actual-page-desktop");
const actualPageMobile = document.querySelector(".actual-page-mobile");
actualPageMobile.textContent = 1;

const stageCarusel = document.querySelector(".stages-of-transformation");
const stageArrowLeft = document.querySelector(".stages-arrow-left");
const stageArrowRight = document.querySelector(".stages-arrow-right");
const stagePages = document.querySelectorAll(".stages-page");

let currentIndex = 0;

function goToSlide(index) {
  if (index < 0) {
    index = participantCard.length - 1;
  }
  if (document.body.clientWidth < 1366) {
    if (index >= participantCard.length) {
      index = 0;
    }
    actualPageMobile.textContent = index + 1;
    participantCarusel.style.transform = `translateX(-${index * 88}vw)`;
  } else {
    if (index >= participantCard.length - 2) {
      index = 0;
    }
    actualPageDesktop.textContent = index + 3;
    participantCarusel.style.transform = `translateX(-${index * 30}vw)`;
  }
  currentIndex = index;
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

let pageIndex = 0;

function goToPage(index) {
  if (index <= 0) {
    stageArrowLeft.disabled = true;
    index = 0;
  } else if (index >= stagePages.length - 1) {
    stageArrowRight.disabled = true;
    index = stagePages.length - 1;
  } else {
    stageArrowRight.disabled = false;
    stageArrowLeft.disabled = false;
  }
  stageCarusel.style.transform = `translate(-${index * 89}vw)`;
  stagePages.forEach((el) => el.classList.remove("stages-page-active"));
  stagePages[index].classList.add("stages-page-active");
  pageIndex = index;
}

function goToNextPage() {
  goToPage(pageIndex + 1);
}

function goToPrevPage() {
  goToPage(pageIndex - 1);
}

stageArrowRight.addEventListener("click", goToNextPage);
stageArrowLeft.addEventListener("click", goToPrevPage);
