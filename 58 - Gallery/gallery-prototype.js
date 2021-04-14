function Gallery(gallery) {
  if (!gallery) throw new Error('Gallery not found');
  this.gallery = gallery;

  this.modal = document.querySelector('.modal');
  this.imgs = gallery.querySelectorAll('img');
  this.currImgIndex = 0;
  this.currentImage = '';
  this.handleClickImage = this.handleClickImage.bind(this);
  this.hiddeModal = this.hiddeModal.bind(this);
  /* Events */

  this.imgs.forEach((img) => {
    img.addEventListener('click', (e) => this.handleClickImage(e));
  });
}

Gallery.prototype.getAttrImg = function (img) {
  return img.attributes;
};

Gallery.prototype.modalInnerEvents = function () {
  this.nextBtn = document.querySelector('.modal button.next');
  this.prevBtn = document.querySelector('.modal button.prev');

  this.handleClickSlide = function (event) {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') {
      return;
    }
    const btnClicked = event.target.className;
    btnClicked === 'next' ? this.currImgIndex++ : this.currImgIndex--;
    if (this.currImgIndex >= this.imgs.length) this.currImgIndex = 0;
    if (this.currImgIndex < 0) this.currImgIndex = this.imgs.length - 1;

    // console.log(this.getAttrImg(this.imgs[this.currImgIndex]));
    this.showModal(
      this.currentImage,
      this.imgs[this.currImgIndex].dataset['description']
    );
  };
  this.handleClickSlide = this.handleClickSlide.bind(this);

  this.nextBtn.addEventListener('click', (e)=> this.handleClickSlide(e));
  this.prevBtn.addEventListener('click', (e)=> this.handleClickSlide(e));
  window.addEventListener('keydown', (e)=> this.handleClickSlide(e));
};

Gallery.prototype.showModal = function ({ title, src }, description) {
  this.imgModal = document.querySelector('.modal  img');
  this.captionH2 = document.querySelector('.modal figcaption h2');
  this.captionP = document.querySelector('.modal figcaption p');
  this.imgModal.src = src.value;
  this.captionH2.textContent = title.value;
  this.captionP.textContent = description;
};

Gallery.prototype.hiddeModal = function (event) {
  if (event.target.classList.contains('open') || event.key === 'Escape') {
    this.modal.classList.remove('open');
    this.modal.removeEventListener('click', () => this.hiddeModal);
    window.removeEventListener('keydown', () => this.hiddeModal);
  }
};

Gallery.prototype.handleClickImage = function (event) {
  this.img = event.target;
  this.currentImage = this.getAttrImg(this.img);
  this.showModal(this.currentImage, this.img.dataset['description']);
  this.currImgIndex = Array.from(this.imgs).indexOf(this.img);
  this.modal.classList.add('open');
  this.initModalEvents();
  this.modalInnerEvents();
};

Gallery.prototype.initModalEvents = function () {
  this.modal.addEventListener('click', (e) => this.hiddeModal(e));
  window.addEventListener('keydown', (e) => this.hiddeModal(e));
};

const gallery1 = new Gallery(document.querySelector('.gallery1'));
const gallery2 = new Gallery(document.querySelector('.gallery2'));

console.log(gallery1);
console.log('asdsa');
console.log(gallery2);
