import React, {useState} from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { HomeBox, HomeText, HomeElements, HomeH1, HomeP, HomeBtn } from './HomeItems';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () =>{
        setIsOpen(!isOpen);
    };

    return (
        <HomeBox>
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <HomeText>
                <HomeElements>
                    <HomeH1>Premier Food Delivery Service</HomeH1>
                    <HomeP>Customer-Focused Design</HomeP>
                    <HomeBtn>Start Here</HomeBtn>
                </HomeElements>
            </HomeText>
            
        </HomeBox>
    )
}

export default Home;
