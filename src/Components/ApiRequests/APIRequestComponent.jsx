import React, { useState, useEffect } from 'react';

const APIRequestComponent = () => {
    const [recipes, setRecipes] = useState([]);
    // const [error, setError] = useState(null);

    useEffect(() => {
        // const url = 'https://food-recipes-with-images.p.rapidapi.com/?q=chicken%20soup';
        // const options = {
        //     method: 'GET',
        //     headers: {
        //         'X-RapidAPI-Key': 'cf080f7483mshe08f7d954ee0595p1e22d1jsn771e4839f4ff',
        //         'X-RapidAPI-Host': 'food-recipes-with-images.p.rapidapi.com'
        //     }
        // };

        const url = 'https://recipe-book2.p.rapidapi.com/recipes-new';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'cf080f7483mshe08f7d954ee0595p1e22d1jsn771e4839f4ff',
                'X-RapidAPI-Host': 'recipe-book2.p.rapidapi.com'
            }
        };

        const fetchData = async () => {
            try {
                const response = await fetch(url, options);
                const data = await response.json();
                setRecipes(data);

            } catch (error) {
                setError(error);
            }
        };




        fetchData();
    }, []);

    console.log(recipes);



    // if (Array.isArray(recipes.d)) {
    //     return (
    //         <div>
    //             {recipes.d.map((recipe) => (
    //                 <div key={recipe.id} className="recipe-container">
    //                     <h2 className="recipe-title">{recipe.Title}</h2>
    //                     <img className="recipe-image" src={recipe.Image} alt={recipe.Title} />
    //                     <div className="recipe-details">
    //                         <h3 className="recipe-subtitle">Ingredients:</h3>
    //                         <ul className="ingredient-list">
    //                             {Object.keys(recipe.Ingredients).map((key) => (
    //                                 <li key={key} className="ingredient">{recipe.Ingredients[key]}</li>
    //                             ))}
    //                         </ul>
    //                         <h3 className="recipe-subtitle">Instructions:</h3>
    //                         <p className="recipe-instructions">{recipe.Instructions}</p>
    //                     </div>
    //                 </div>
    //             ))}
    //         </div>
    //     );
    // } else {
    //     return <p className="no-recipes">No recipes available</p>;
    // }

    if (Array.isArray(recipes)) {
        return (
            <div className='carte'>
                {recipes.map((recipe, index) => (
                    <div key={index} className="recipe-container">
                        <h2 className="recipe-title">{recipe.title}</h2>
                        <img className="recipe-image" src={recipe.image} alt={recipe.title} />
                        <p className="recipe-category">Category: {recipe.newCategory}</p>
                    </div>
                ))}
            </div>
        );
    } else {
        return <p className="no-recipes">No recipes available</p>;
    }
};

export default APIRequestComponent;


