export const checkFavorite = (favorites, story) => {

    return favorites.some(favorite => favorite.id === story.id);

};