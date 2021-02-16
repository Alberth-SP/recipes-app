
import './App.css';
import { AllRecipes } from './features/allRecipes/AllRecipes.js';
import { FavoriteRecipes } from './features/favoriteRecipes/FavoriteRecipes';
import { SearchTerm } from './features/searchTerm/SearchTerm.js';

export function App() {


  return (
    <main>
      <section>
        <SearchTerm />
      </section>
      <section>
        <h2> Favorite Recipes </h2>
        <FavoriteRecipes />
      </section>
      <section>
        <h2> All Recipes </h2>
        <AllRecipes />

      </section>
    </main>

  );
  
}

/*
function getFIlterRecipes(recipes, searchTerm){
  if(recipes){
    return recipes.filter( recipe => recipe.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
  return [];
  
}
*/