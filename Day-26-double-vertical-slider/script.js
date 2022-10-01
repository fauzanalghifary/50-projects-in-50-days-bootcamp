const sliderContainer = document.querySelector(".slider-container");
const slideRight = document.querySelector(".right-slide");
const slideLeft = document.querySelector(".left-slide");
const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");
const slidesLength = slideRight.querySelectorAll("div").length;

let activeSlideindex = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

upButton.addEventListener("click", () => changeSlide("up"));
downButton.addEventListener("click", () => changeSlide("down"));

const changeSlide = (direction) => {
  const sliderHeight = sliderContainer.clientHeight;
  if (direction === "up") {
    activeSlideindex++;
    if (activeSlideindex > slidesLength - 1) {
      activeSlideindex = 0;
    }
  }

  if (direction === "down") {
    activeSlideindex--;
    if (activeSlideindex < 0) {
      activeSlideindex = slidesLength - 1;
    }
  }

  slideRight.style.transform = `translateY(-${
    activeSlideindex * sliderHeight
  }px)`;
  slideLeft.style.transform = `translateY(${
    activeSlideindex * sliderHeight
  }px)`;
};
