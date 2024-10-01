import { useState, useEffect } from 'react';
import logo from './assets/GBN.jpg'

function Header(){
    
    const[navbar,setNavbar] = useState(false);

    const changBackground = () => {
        if(window.scrollY >= 100) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll',changBackground);

    return(
        <nav className="container"> 
        <div className = {navbar ? 'navbar active' : 'navbar'}>
            <img className ="logo"src ={logo} ></img>
            <ul>
                <li class = "different"><a href = "#home">Home</a></li>
                <li class = "different"> <a href = "#proj">Projects</a></li>
                <li class = "different"><a href = "#idea">Ideas?</a></li>
            </ul>
        </div>
        </nav>
    );
}

export default Header
