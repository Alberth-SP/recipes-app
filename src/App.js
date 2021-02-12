
import './App.css';
import { AllRecipes } from './features/allRecipes/AllRecipes.js';
import { FavoriteRecipes } from './features/favoriteRecipes/FavoriteRecipes';
import { SearchTerm } from './features/searchTerm/SearchTerm.js';
 
export function App(props) {
  const { state, dispatch } = props;
  

  const visibleAllRecipes = getFIlterRecipes(state.allRecipes, state.searchTerm);
  const visibleFavoriteRecipes = getFIlterRecipes(state.favoriteRecipes, state.searchTerm);


  return (
    <main>
      <section>
        <SearchTerm 
          searchTerm={state.searchTerm}
          dispatch={dispatch}
        />
      </section>
      <section>
        <h2> Favorite Recipes </h2>
        <FavoriteRecipes 
          favoriteRecipes={visibleFavoriteRecipes}
          dispatch={dispatch}
        />
      </section>
      <section>
        <h2> All Recipes </h2>
        <AllRecipes 
          allRecipes={visibleAllRecipes}
          dispatch={dispatch}
        />

      </section>
    </main>

  );
  
}


function getFIlterRecipes(recipes, searchTerm){
  if(recipes){
    return recipes.filter( recipe => recipe.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
  return [];
  
}
