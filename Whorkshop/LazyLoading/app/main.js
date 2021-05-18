const imgTemplateHTML = (url) => {
  const img = document.createElement('img');
  img.dataset.src = url;
  imgContainer.appendChild(img);
  return img;
};

const getImgs = async () => {
  try {
    const res = await fetch('https://randomfox.ca/floof/');
    const { image } = await res.json();
    imgCount.fetched++;
    return image;
  } catch (e) {}
};

const imgContainer = document.querySelector('#images');
const btn = document.querySelector('.btn');
const btnClear = document.querySelector('.btn-clear');

const imgCount = {
  fetched: 0,
  onDOM: 0,
};

const createAndMountNode = async () => {
  try {
    const imgHref = await getImgs();
    const imgNode = imgTemplateHTML(imgHref);
    return imgNode;
  } catch (e) {}
};

const handleClick = async () => {
  btn.disabled = true;
  const image = await createAndMountNode();
  registerLastElement(image);
  btn.disabled = false;
  console.log(imgCount);
};

const init = async () => {
  btn.addEventListener('click', handleClick);
  btnClear.addEventListener('click', () => {
    imgContainer.innerHTML = '';
  });
};

const handleObserver = (entries) => {
  const isElementVisible = (entry) => entry.isIntersecting;
  const loadElement = ({ target }) => {
    const currentElement = target;
    currentElement.src = currentElement.dataset.src;
    observer.unobserve(currentElement);
  };
  entries.filter(isElementVisible).forEach(loadElement);
};
const observer = new IntersectionObserver(handleObserver);

const registerLastElement = (element) => {
  observer.observe(element);
};

init();
