import {RouterHandler} from "./router";
import {checkFavorite} from "./Utils/checkFavorite";
import {store} from "./store";
import {handleClickFavorite} from "./Pages/stories";

export class App {
    constructor() {
        console.log('app Works!!');
        new RouterHandler();
        this.$links = document.querySelectorAll('.header-link');
        this.eventListeners();
    }

    eventListeners() {
        document.addEventListener("click", handleClickFavorite);
    }

}