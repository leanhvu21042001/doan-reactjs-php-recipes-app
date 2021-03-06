import React from 'react'
import './MyRecipe.css'
import Card from './Card';

export default function RecipeList(props) {
    let recipes = props.recipes;
    return (
        <div className="recipe-product recipe-list">
            <div className="container">
                <div className="row">
                    {
                        recipes.map((value, index) => <Card key={index} handleDelete={props.deleteRecipe} recipe={value} />)
                    }
                </div>
            </div>
        </div>
    )
}
