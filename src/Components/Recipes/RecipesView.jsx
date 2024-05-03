import React from 'react';
import './RecipesViewStyle.css';
import APIRequestComponent from '../ApiRequests/APIRequestComponent';
import UseScrollComponent from '../UseScroll/UseScrollComponent';

const RecipesView = () => {

    UseScrollComponent();

    return (
        <div className="recipes-view animation">
            <div className='uchebni-celi animation'><h3>If the recipes are not loading, the reason may be that the reached API requests have reached the maximum limit for the day from the free resource I use for educational purposes.</h3></div>
            <h1>Recipes</h1>
            <APIRequestComponent/>
        </div>
    );
};

export default RecipesView;








 










