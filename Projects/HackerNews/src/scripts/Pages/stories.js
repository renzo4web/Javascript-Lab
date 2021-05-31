import view from "../Utils/view";
import {Story} from "../components/Story";
import {showErrorHTML} from "../Utils/errorScreen";
import {store} from "../store";
import {checkFavorite} from "../Utils/checkFavorite";

export async function Stories(path) {
    const {favorites} = store.getState();
    console.log(favorites);


    const stories = await getStories(path).catch(showErrorHTML);
    const hasStories = stories.length > 0;
    view.innerHTML = `<div>
            ${hasStories
        ? stories.map((story, i) => Story({...story, index: i + 1, isFavorite: checkFavorite(favorites, story)}))
                 .join('')
        : "Empty"}
                </div>`;


}

const getStories = async (path) => {
    let queryPath = '';
    switch (path) {
        case '/':
            queryPath = "news";
            break;
        case '/top' :
            queryPath = "news";
            break;
        case '/new' :
            queryPath = "newest";
            break;
        case '/ask' :
            queryPath = "ask";
            break;
        case '/show' :
            queryPath = "show";
            break;

    }

    const res = await fetch(`https://api.hackerwebapp.com/${queryPath}`);
    const stories = await res.json();
    return stories;
};

export const handleClickFavorite = async ({target}) => {

    if (target.classList.contains('favorite')) {
        const {favorites} = store.getState();
        const story = JSON.parse(target.dataset.story);
        const isStoryFavorite = checkFavorite(favorites, story);

        store.dispatch(
            {
                type: isStoryFavorite ? 'REMOVE_FAVORITE' : 'ADD_FAVORITE',
                payload: {favorite: story}
            }
        );

        const [, path] = window.location.hash.split('#');
        await Stories(path);
    }

};