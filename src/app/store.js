
import { createStore, combineReducers } from 'redux';
import { allRecipesReducer } from '../features/allRecipes/allRecipesSlice.js';
import { favoriteRecipesReducer }  from '../features/favoriteRecipes/favoriteRecipesSlice.js';
import { searchTermReducer } from '../features/searchTerm/searchTermSlice.js';


const reducers = {
    searchTerm: searchTermReducer,
    allRecipes: allRecipesReducer,
    favoriteRecipes: favoriteRecipesReducer
    
}

const store = createStore(combineReducers(reducers));
export default store;



