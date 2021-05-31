const initialState = {
    favorites: []
};

function createStore(reducer) {

    let currentState = reducer(undefined, {});

    return {
        getState: () => currentState,
        dispatch: action => {
            currentState = reducer(currentState, action);
        }
    };

}

const favoritesReducer = (state = initialState, action) => {
    const {type, payload} = action;
    // payload: { favorite: { title: "story1", id: 1 }

    switch (type) {
        case 'ADD_FAVORITE': {
            const {favorite: newFavorite} = payload;
            const favorites = [...state.favorites, newFavorite];
            return {favorites};
        }
        case 'REMOVE_FAVORITE': {
            const {favorite: removedFav} = payload;
            const favorites = state.favorites.filter(({id}) => removedFav.id !== id);
            return {favorites};
        }
        default:
            return state;
    }

};

export const store = createStore(favoritesReducer);
