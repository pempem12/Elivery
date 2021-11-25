import React from 'react';
import {SidebarBox, Icon, CloseIcon, SidebarMenu, SidebarLink, SidebarBtn, SidebarRoute} from './SideItems';
const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarBox isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarMenu>
                <SidebarLink to="">Restaurants</SidebarLink>
                <SidebarLink to="/offers">Offers</SidebarLink>
                <SidebarLink to="/cart">Cart</SidebarLink>
            </SidebarMenu>
            <SidebarBtn>
                <SidebarRoute to="/">Order Now</SidebarRoute>
            </SidebarBtn>
        </SidebarBox>
       
    )
}

export default Sidebar;
