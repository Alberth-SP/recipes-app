
import allRecipesData from '../../data.js';
import { selectSearchTerm } from '../searchTerm/searchTermSlice';

export const loadData = () => {
    return {
        type: 'allRecipes/loadData',
        payload: allRecipesData
    };
}


export const selectAllRecipes = (state) => state.allRecipes;

export const selectFilteredAllRecipes = (state) => {
    const allRecipes = selectAllRecipes(state);
    const searchTerm = selectSearchTerm(state);

    return allRecipes.filter( (recipe) => 
        recipe.name.toLowerCase().includes(searchTerm.toLowerCase())

    );

};
const initialAllRecipes = [];
/* Compomentes Reductores */
export const allRecipesReducer = (allRecipes=initialAllRecipes, action) => {
    switch(action.type){
        case 'allRecipes/loadData':
            return action.payload;
        case 'favoriteRecipes/addRecipe':
            return allRecipes.filter(recipe => recipe.id !== action.payload.id);
        case 'favoriteRecipes/removeRecipe':
            return [...allRecipes, action.payload];
        default:
            return allRecipes;
    }
};