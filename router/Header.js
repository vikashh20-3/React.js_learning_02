import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
<>
<header>
            <div className="logo">
        <img src=" https://images.unsplash.com/photo-1506365558634-e0c754979231?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGdvb2dsZSUyMGNhbGVuZGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60 "alt="logo"></img>
        </div>
        <div className="lists">
        <li>
        <NavLink to="/">Home</NavLink>
        </li>
        <li>
        <NavLink to="/about">About</NavLink>
         </li>
        <li>
        <NavLink to="/todolist">Todo list </NavLink>
    </li>
        <li>
        <NavLink to="/contact">Contact Us </NavLink>
    </li>
    </div>
    </header>
</>
  )
}
export default Header;