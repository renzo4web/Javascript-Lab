class Router {
  constructor(paths) {
    this.paths = paths;
    this._initRouter();
  }

  _initRouter() {
      try {
        console.log(window.location);
        const { pathname = '/' } = window.location;
        const URL = pathname === '/' ? 'home' : pathname.replace('/', '');
        console.log(URL);
        this.load(URL);
      } catch (e) {
        console.warn(e);
      } 

  }

  load(page = "home") {
    const { paths } = this;
    const { path, template } = paths[page] || paths['error'];
    const $CONTAINER = document.querySelector(".root");
    $CONTAINER.innerHTML = template;
    window.history.pushState({}, "Genial", path);
}
}
