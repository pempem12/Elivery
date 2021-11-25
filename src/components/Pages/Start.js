import React from 'react';
import Home from '../Home';
import { GlobalStyle } from '../../globalStyles';
import Restaurants from '../Restaurants';
import { RestaurantsData } from '../Restaurants/data';



const Start = () => {
    return (
        <div>
            <GlobalStyle />
            <Home />
            <Restaurants heading="Dive into Deliciousness" data={RestaurantsData} />
        </div>
    )
};

export default Start;
