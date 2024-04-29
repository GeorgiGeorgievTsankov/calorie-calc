import React, { useState, useEffect } from 'react';

const APIRequestComponent = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const url = 'https://low-carb-recipes.p.rapidapi.com/random';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'cf080f7483mshe08f7d954ee0595p1e22d1jsn771e4839f4ff',
                'X-RapidAPI-Host': 'low-carb-recipes.p.rapidapi.com'
            }
        };

        const fetchData = async () => {
            try {
                const response = await fetch(url, options);
                const data = await response.json();
                setRecipes(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            {recipes && recipes.map((recipe) => (
                <div className="card" key={recipe.id}>
                    <h1>{recipe.name}</h1>
                </div>
            ))}
        </div>
    );
};

export default APIRequestComponent;


