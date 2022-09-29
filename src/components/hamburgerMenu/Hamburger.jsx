import React from 'react';
import { slide as Menu } from 'react-burger-menu'
import './style.css'

function Hamburger (){
    return(
        <Menu right >
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <p>tydoysayd\sy</p>
      </Menu>
    )
}

export default Hamburger