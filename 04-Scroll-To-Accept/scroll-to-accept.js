function scrollToAccept() {
  const tOs = document.querySelector('.terms-and-conditions'),
      btnAccept = document.querySelector('.accept');

  if (!tOs) return;

  function callback(entry) {
    console.log(entry);
    if (entry[0].intersectionRatio == 1) {
      btnAccept.disabled = false;
      observer.unobserve(target)
    }


  }

  // Root is what is gonna be observer , default is the body and threshold how much is on screen 1.0 = 100%
  const observer = new IntersectionObserver(callback,
      {root: tOs, threshold: 1.0});

  let target = tOs.lastElementChild;

  observer.observe(target);

}

// only is called if in the html  a element term-of-conditions exist
scrollToAccept();