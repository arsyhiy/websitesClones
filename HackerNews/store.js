function createStore(reducer){
    let currentState = reducer(undefined, {})
    return {
        getState: () => currentState,
        dispatch: action => {
            currentState = reducer(currentState, action)
        }
    }
}

const intialState = {
    favorites: []
}

function favoritesReduser(state = intialState, action){
    switch(action.type){
        case "ADD_FAVORITE": {
            const addedFavorite = action.payload.favorite
            const favorites = [...state.favorites, addedFavorite]
            return {favorites}
        }

        case "REMOVE_FAVORITE": {
            const removedFavorite = action.payload.favorite
            const favorites = state.favorites.filter(favorite => favorite.id !== removedFavorite.id)
            return {favorites}
        }
        default:
        return state
    }
}

const store = createStore(favoritesReduser)

export default store
