import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const RestaurantsBox = styled.div`
    width: 100vw;
    min-height: 100vh;
    padding: 5rem calc((100vw - 1300px) / 2);
    background: #150f0f;
    color: #fff;
`;

export const RestaurantsHeading = styled.h1`
    font-size: clamp(2rem, 2,5vw, 3rem);
    text-align: center;
    margin-bottom: 5rem;
`;

export const Restaurant = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
`;
export const RestaurantCard = styled.div`
    margin: 0 2rem;
    line-height: 2;
    width: 300px;
`;

export const RestaurantImg = styled.img`
    height:300px;
    min-width: 300px;
    max-width: 100%;
    box-shadow: 8px 8px #6961AE;
`;

export const RestaurantInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    text-align: center;
`;

export const RestaurantTitle = styled(Link)`
    font-weight: 400;
    font-size: 1.5rem;
    border: none;
    color: #e31837;
    transition: 0.2s ease-out;
    list-style: none;
    text-decoration: none;

    &:hover{
        transition: 0.2s ease-out;
        color: #ffc500;
    }
`;

export const RestaurantDesc = styled.p`
    font-family: "Estonia", cursive;
    margin-bottom: 1rem;
`;

export const RestaurantRating = styled.p`
    font-family: "Estonia", cursive;
    margin-bottom: 1rem;
    font-size: 2rem;
`
