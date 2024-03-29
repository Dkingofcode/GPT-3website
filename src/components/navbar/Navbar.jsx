import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLin } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';

const Menu = () => (
  <>
   <p><a href="#home">Home</a></p>
   <p><a href="#wgpt3">What is GPT?</a></p>
   <p><a href="#possibility">Open AI</a></p>
   <p><a href="#features">Case Studies</a></p>
   <p><a href="#blog">Library</a></p>
  </>  
)

// BEM -> Block Element Modifier

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);  
  
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
         <div className="gpt3__navbar-links_logo">
            <img src={logo} alt="logo"  /> 
         </div>
           <div className="gpt3__navbar-links_container">
            <p><a href="#home">Home</a></p>
            <p><a href="#wgpt3">What is GPT?</a></p>
            <p><a href="#possibility">Open AI</a></p>
            <p><a href="#features">Case Studies</a></p>
            <p><a href="#blog">Library</a></p>
          </div>  
        </div>
        <div className="gpt3__navbar-sign">
         <p>Sign in</p>
         <button type="button">Sign up</button>
        </div>

        <div className="gpt3__navbar-menu">
       {toggleMenu ? 
       <RiCloseLin color="#fff" size={27} onClick={() => setToggleMenu(true)} /> 
       : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(false)}  />
    }
    {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up">
        <div className="gpt3__navbar-menu_container-links">
        <Menu />
         <div className="gpt3__navbar-menu">
          <p>Sign in</p>
         </div>   
        </div>
      </div>  
    )}
    </div>
    </div>
  )
}

export default Navbar;
