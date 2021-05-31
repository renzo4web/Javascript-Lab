import view from "../Utils/view";
import {store} from "../store";
import {Story} from "../components/Story";
import {checkFavorite} from "../Utils/checkFavorite";

export const Favorite = () => {

    const {favorites} = store.getState();

    const hasFavorites = favorites.length > 0;

    view.innerHTML = `
                ${
        hasFavorites
            ? favorites.map(story => Story({...story, isFavorite: checkFavorite(favorites, story)})).join('')
            : "<p>No Favorites For The Moment<p>"
    }           
    `;

};