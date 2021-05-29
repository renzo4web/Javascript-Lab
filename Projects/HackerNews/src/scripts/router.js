const Navigo = require("navigo");
const {Stories} = require("./Pages/stories");
const router = new Navigo('/');


export class RouterHandler {
    constructor() {
        this.createRoutes();
    }

    createRoutes() {
        const routes = [
            {path: '/', page: Stories},
            {path: '/top', page: Stories},
            {path: '/new', page: Stories},
            {path: '/ask', page: Stories},
            {path: '/show', page: Stories},
        ];

        routes.forEach(({path, page}) => {
            router.on(path, () => {
                page(path);
            }).resolve();
        });
    }
}