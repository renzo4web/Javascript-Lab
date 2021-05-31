import {RouterHandler} from "./router";
import {checkFavorite} from "./Utils/checkFavorite";
import {store} from "./store";

export class App {
    constructor() {
        console.log('app Works!!');
        new RouterHandler();
        this.$links = document.querySelectorAll('.header-link');

    }


}