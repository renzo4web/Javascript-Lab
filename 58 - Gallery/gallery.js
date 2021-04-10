function Gallery(gallery) {
  const modal = document.querySelector('.modal');
  const imgs = gallery.querySelectorAll('img');
  let currImgIndex = 0;

  const getAttrImg = (img) => img.attributes;

  const modalInnerEvents = () => {
    const nextBtn = document.querySelector('.modal button.next');
    const prevBtn = document.querySelector('.modal button.prev');
    const handleClickSlide = (event) => {
      if(event.key !== 'ArrowRight' && event.key !== 'ArrowLeft'){
        return
      }
      const btnClicked = event.target.className;
      btnClicked === 'next' ? currImgIndex++ : currImgIndex--;
      if (currImgIndex >= imgs.length) currImgIndex = 0;
      if (currImgIndex < 0) currImgIndex = imgs.length - 1;
      showModal(
        getAttrImg(imgs[currImgIndex]),
        imgs[currImgIndex].dataset['description']
      );
    };
    nextBtn.addEventListener('click', handleClickSlide);
    prevBtn.addEventListener('click', handleClickSlide);
    window.addEventListener('keydown', handleClickSlide);
  };

  const showModal = ({ title, src }, description) => {
    const imgModal = document.querySelector('.modal  img');
    const captionH2 = document.querySelector('.modal figcaption h2');
    const captionP = document.querySelector('.modal figcaption p');
    imgModal.src = src.value;
    captionH2.textContent = title.value;
    captionP.textContent = description;
  };

  const hiddeModal = (event) => {
    if (event.target.classList.contains('open') || event.key === 'Escape') {
      modal.classList.remove('open');
      modal.removeEventListener('click', hiddeModal);
      window.removeEventListener('keydown', hiddeModal);
    }
  };

  const handleClickImage = (event) => {
    const img = event.target;
    showModal(getAttrImg(img), img.dataset['description']);
    currImgIndex = Array.from(imgs).indexOf(img);
    modal.classList.add('open');
    initModalEvents();
    modalInnerEvents();
  };

  /* Events */

  imgs.forEach((img) => {
    img.addEventListener('click', handleClickImage);
  });
  const initModalEvents = () => {
    modal.addEventListener('click', hiddeModal);
    window.addEventListener('keydown', hiddeModal);
  };
}

const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));
