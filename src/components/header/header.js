import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom";



const Header = () => {



    return (

        <header className="header">
          <nav className='header-container'>             
            <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""} >
              Home
            </NavLink>
            <NavLink to="/new-character" className={({ isActive }) => isActive ? "active-link" : ""} >  
              New Character
            </NavLink>
          </nav>
       </header>
    )
}

export default Header;