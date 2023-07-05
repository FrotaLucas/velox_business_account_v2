window.addEventListener("load", function() {
  const carouselContainer = document.querySelector('.carousel-container');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const slideWidth = carouselContainer.clientWidth;
  const totalSlides = carouselContainer.querySelectorAll('.slide').length;
  let currentPosition = 0;

  prevBtn.addEventListener('click', () => {
    currentPosition--;
    if (currentPosition < 0) {
      currentPosition = totalSlides - 1;
    }
    carouselContainer.style.transform = `translateX(-${currentPosition * slideWidth}px)`;
    console.log("currentPosition", currentPosition)
    console.log("slideWidth", slideWidth)

  });

  nextBtn.addEventListener('click', () => {
    currentPosition++;
    if (currentPosition >= totalSlides) {
      currentPosition = 0;
    }
    carouselContainer.style.transform = `translateX(-${currentPosition * slideWidth}px)`;
    console.log("currentPosition", currentPosition)
    console.log("slideWidth", slideWidth)
  });
});