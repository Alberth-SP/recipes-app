import React , { useEffect } from 'react';
import { loadData } from './allRecipesSlice.js';
import { addRecipe } from '../favoriteRecipes/favoriteRecipesSlice.js';

import Recipe from "../../components/Recipe.js";

import FavoriteButton from "../../components/FavoriteButton.js";

const favoriteIconURL = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/favorite.svg'

export function AllRecipes(props) {
    const { allRecipes, dispatch } = props;

    const onFirstRender = () => {
        dispatch(loadData())
    }

    useEffect(onFirstRender, []);

    const onAddRecipeHandler = (recipe) => {
        console.log("Recipe: ", recipe);
        dispatch(addRecipe(recipe));
    };

    return (
        <div className="recipes-container" >
            {
                allRecipes.map((recipe) => (
                    <Recipe  recipe={recipe} key={recipe.id} >
                        <FavoriteButton
                        onClickHandler={() => onAddRecipeHandler(recipe)}
                        icon={favoriteIconURL}
                        
                        >
                            Add To Favorite
                            
                        </FavoriteButton>

                    </Recipe>

                ))
            }
            
        </div>
    );
};

