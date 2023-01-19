const slider = document.querySelector("#slider");
const sliderItems = Array.from(slider.children);

const btnNext = document.querySelector("#btnNext");
const btnPrev = document.querySelector("#btnPrev");

sliderItems.forEach(function (slide, index) {
  if (index !== 0) {
    slide.classList.add("hidden");
  }

  //   добавляем индексы
  slide.dataset.index = index;

  //   добавляем дата атребут active для первого\активного слайда
  sliderItems[0].setAttribute("data-active", "");

  //   Клик по слайду
  slide.addEventListener("click", function () {
    // скрываем текущий слайд
    slide.classList.add("hidden");
    slide.removeAttribute("data-active");

    // рассчитываем индекс след слайда
    let nextSlideIndex;
    if (index + 1 === sliderItems.length) {
      nextSlideIndex = 0;
    } else {
      nextSlideIndex = index + 1;
    }

    // находим след слайд
    const nextslide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);

    // показываем след слайд
    nextslide.classList.remove("hidden");
    nextslide.setAttribute("data-active", "");

    console.log(slide);
  });
});

btnNext.onclick = function () {
  const currentSlide = slider.querySelector("[data-active]");
  const currentSlideIndex = +currentSlide.dataset.index;
  currentSlide.classList.add("hidden");
  currentSlide.removeAttribute("data-active");

  const nextSlideIndex =
    currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1;
  const nextslide = slider.querySelector(`[data-index= "${nextSlideIndex}"]`);
  nextslide.classList.remove("hidden");
  nextslide.setAttribute("data-active", "");
};

btnPrev.onclick = function () {
  const currentSlide = slider.querySelector("[data-active]");
  const currentSlideIndex = +currentSlide.dataset.index;
  currentSlide.classList.add("hidden");
  currentSlide.removeAttribute("data-active");

  const nextSlideIndex =
    currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1;
  const nextslide = slider.querySelector(`[data-index= "${nextSlideIndex}"]`);
  nextslide.classList.remove("hidden");
  nextslide.setAttribute("data-active", "");
};
