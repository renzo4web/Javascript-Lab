import view from "./view";

export const showErrorHTML = () => {
    view.innerHTML = `<div class="error">Error fetching story</div>`;
};
