function Slider(slider) {
    if (!slider) return;
    this.slider = slider;
    this.btnPrev = this.slider.querySelectorAll('.controls button')[0];
    this.btnNext = this.slider.querySelectorAll('.controls button')[1];
    this.slides = this.slider.querySelectorAll('.slides .slide');
    this.currIndex  = Array.from(this.slides).indexOf(document.querySelector('.slides .slide.current'));
    this.moveSlideRight = this.moveSlideRight.bind(this);

    this.btnNext.addEventListener('click', this.moveSlideRight);
    this.btnPrev.addEventListener('click', this.moveSlideRight);
}


Slider.prototype.addSelectors = function ([element, selector]) {
    if (!element) return;
    element.classList.add(`${selector}`);
};


Slider.prototype.clearSlidesIndex = function () {
    this.slides.forEach(({classList}) => {
        classList.remove('next');
        classList.remove('current');
        classList.remove('prev');
    });
};


Slider.prototype.moveSlideRight = function (event) {
    console.log(event.target.className);
    let prev = this.slider.querySelector('.slides .slide.current');

    this.currIndex = Array(this.slides).indexOf(prev);
    console.log(this.currIndex);

    if (this.currIndex > this.slides.length - 3) {
        // this.currIndex = 2;
        console.log('derecha');
    }

    this.clearSlidesIndex();

    let current = this.slides[this.currIndex + 1];
    let next = this.slides[this.currIndex + 2];
    console.log(this.currIndex);

    if (event.target.className === 'goToPrev') {
        this.currIndex = Array(this.slides).indexOf(document.querySelector('.slides .slide.current'));
        if (this.currIndex <= 1) console.log('izquyierda');
        prev = this.slides[this.currIndex - 2];
        current = this.slides[this.currIndex - 1];
        next = this.slides[this.currIndex];
    }

    [
        [prev, 'prev'],
        [current, 'current'],
        [next, 'next'],
    ].forEach(this.addSelectors);
};


const mySlider = new Slider(document.querySelector('.slider'));
const dogSlider = new Slider(document.querySelector('.dog-slider'));
console.log(mySlider);