import styled from 'styled-components';
import BackgroungImg from '../../images/background.jpg'

export const HomeBox = styled.div `
    background: linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.3)), url(${BackgroungImg});
    height: 100vh;
    background-position: center;
    background-size: cover;


`;

export const HomeText = styled.div`
    height: calc(100vh - 80px);
    max-height: 100%;
    width: 100%;
    padding: 0rem calc((100vw - 1300px) / 2);
`;

export const HomeElements = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: flex-start;
    height: 100vh;
    max-height: 100%;
    padding: 0 2rem;
    width: 650px;
    color: #fff;
    text-transform: uppercase;
    line-height: 1;
    font-weight: bold;

    @media screen and (max-width: 650px){
        width: 100%
    }
`;

export const HomeH1 = styled.div`
    font-size: clamp(2.5rem, 10vw, 5rem);
    margin-bottom: 1rem;
    box-shadow: 3px 5px #6961AE;
    letter-spacing: 3px;
    font-family: "Estonia", cursive;
`;

export const HomeP = styled.p`
    font-size: clamp(2rem, 2.5vw, 3rem);
    margin-bottom: 2rem;
    font-family: "Estonia", cursive;

`;

export const HomeBtn = styled.p`
    font-size: 1.4rem;
    padding: 1rem 4rem;
    border: none;
    background: #6961AE;
    color: white;
    transition: 0.2s ease-out;
    font-family: "Estonia", cursive;


    &:hover {
        background: #ffc500;
        transition: 0.2 ease-out;
        cursor: pointer;
        color: #000;
    }

`