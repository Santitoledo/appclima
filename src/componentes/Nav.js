import React from 'react';
import {  NavLink } from 'react-router-dom'

const menu = [
    {"texto":"Home", "link":"/"},
    {"texto":"About", "link":"/about"},
    {"texto":"Contact", "link":"/contact"}
];


const Nav = () => menu.map((nav, i) => <NavLink key={i} to={nav.link}>{nav.texto}</NavLink>)
export default Nav;