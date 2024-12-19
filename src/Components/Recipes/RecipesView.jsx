import React from 'react';
import './RecipesViewStyle.css';
import APIRequestComponent from '../ApiRequests/APIRequestComponent';
import UseScrollComponent from '../UseScroll/UseScrollComponent';

const RecipesView = () => {

    UseScrollComponent();

    return (
        <div className="recipes-view animation">
            <APIRequestComponent/>
        </div>
    );
};

export default RecipesView;








 










