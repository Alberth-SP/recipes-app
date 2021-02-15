

export const addRecipe = (recipe) => {
    return {
        type: 'favoriteRecipes/addRecipe',
        payload: recipe
    };
}

export const removeRecipe = (recipe) => {
    return {
        type: 'favoriteRecipes/removeRecipe',
        payload: recipe

    };
}
const initialState = [];
export const favoriteRecipesReducer = (favoriteRecipes=initialState, action) => {
    switch(action.type){
        case 'favoriteRecipes/addRecipe':
            return [ ...favoriteRecipes, action.payload];
        case 'favoriteRecipes/removeRecipe':
            return favoriteRecipes.filter(it => it.id !== action.payload.id);
        default:
            return favoriteRecipes;
    }
};
