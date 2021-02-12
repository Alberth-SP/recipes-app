

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
const initialState = [
    { id: 0, name: 'Biscuits', img: './../../img/biscuits.jpg'},
    { id: 1, name: 'Bulgogi', img: '../../img/bulgogi.jpg'},
    { id: 2, name: 'Calamari', img: '../../img/calamari.jpg'}
];
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
