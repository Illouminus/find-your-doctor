import React from 'react'
import {NavLink} from 'react-router-dom'

function Navigation() {
  return (
    <nav className="">

        <NavLink to="main">Products</NavLink>
        <NavLink to="registration">About</NavLink>
        <NavLink to="login">About</NavLink>

    </nav>
  )
}

export default Navigation