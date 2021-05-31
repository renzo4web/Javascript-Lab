import '../styles/index.scss';
import {App} from "./App";
import {store} from "./store";

if (process.env.NODE_ENV === 'development') {
    require('../index.html');
}

window.onhashchange = () => {
    setActiveLink();
};

const setActiveLink = () => {
    const link = document.querySelector(`a[href="${window.location.hash}"]`);
    if (!link) return;
    const allLinks = document.querySelectorAll('.header-link');
    allLinks.forEach(link => link.classList.remove('active'));
    link.classList.add('active');
};

new App();


// const action = { type: "ADD_FAVORITE", payload: { favorite: { title: "story1", id: 1 } } };


