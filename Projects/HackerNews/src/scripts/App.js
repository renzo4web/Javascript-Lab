import {RouterHandler} from "./router";

export class App {
    constructor() {
        console.log('app Works!!');
        new RouterHandler();
    }
}