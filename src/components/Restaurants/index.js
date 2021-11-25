import React from 'react'
import { 
    RestaurantsBox,
    RestaurantsHeading,
    Restaurant, 
    RestaurantCard,
    RestaurantImg, 
    RestaurantInfo, 
    RestaurantTitle,
    RestaurantDesc,
    RestaurantRating,
}
from './RestaurantsItems'

const RestaurantsItems = ({heading, data}) => {
    return (
        <RestaurantsBox>
            <RestaurantsHeading>{heading}</RestaurantsHeading>
            <Restaurant>
                {data.map((restaurant, index) => {
                    return(
                        <RestaurantCard key={index}>
                            <RestaurantImg src={restaurant.img} alt={restaurant.alt}/>
                            <RestaurantInfo>
                                <RestaurantTitle to={`${restaurant.path}`}>{restaurant.name}</RestaurantTitle>
                                <RestaurantDesc>{restaurant.desc}</RestaurantDesc>
                                <RestaurantRating>{restaurant.rating}</RestaurantRating>
                            </RestaurantInfo>
                        </RestaurantCard>
                    )
                })}
            </Restaurant>
        </RestaurantsBox>
     
    )
}

export default RestaurantsItems
