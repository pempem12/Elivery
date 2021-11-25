import React from 'react';
import { Navigation, NavLink, NavIcon, Bars } from './NavItems';

const Navbar = ({toggle}) => {
    return (
        <Navigation>
            <NavLink to='/'>Elivery</NavLink>
            <NavIcon onClick={toggle}>
                <p>Menu</p>
                <Bars />
            </NavIcon> 
        </Navigation>
    )
}

export default Navbar;
