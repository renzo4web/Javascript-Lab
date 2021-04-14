// const Slider = (slider) => {
//   if (!slider) return;
//   const [btnPrev, btnNext] = slider.querySelectorAll('.controls button');
//   const slides = slider.querySelectorAll('.slides .slide');
//   const numOfSlides = slides.length;
//   let currIndex = '';
//   const clearSlidesIndex = () => {
//     slides.forEach((slide) => {
//       slide.classList.remove('next');
//       slide.classList.remove('current');
//       slide.classList.remove('prev');
//     });
//   };
//   const addSelectors = ([element, selector]) => {
//     if (!element) return;
//     element.classList.add(`${selector}`);
//   };
//
//   const moveSlideRight = () => {
//     let prev = slider.querySelector('.slides .slide.current');
//     currIndex =
//       currIndex > numOfSlides - 3 ? -1 : Array.from(slides).indexOf(prev);
//     clearSlidesIndex();
//     const current = slides[currIndex + 1];
//     const next = slides[currIndex + 2];
//     [
//       [prev, 'prev'],
//       [current, 'current'],
//       [next, 'next'],
//     ].forEach(addSelectors);
//   };
//   btnNext.addEventListener('click', moveSlideRight);
// };
//
// const mySlider = Slider(document.querySelector('.slider'));
