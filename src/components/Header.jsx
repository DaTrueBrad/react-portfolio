import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  const [isActive, setActive] = useState("false");

  function menuClick() {
    setActive(!isActive)
  }
  return (
    
    <header>
      <h2>Brady Bott</h2>
      <i class='bx bx-menu' onClick={() => menuClick()}></i>
      <nav className="nav-menu" id={`${isActive ? "hidden" : ""}`}>
        <NavLink to='/home' activeStyle={{backgroundColor: '#AF4319'}} onClick={menuClick}>Home</NavLink>
        <NavLink to='/about' activeStyle={{backgroundColor: '#AF4319'}} onClick={menuClick}>About</NavLink>
        <NavLink to='/portfolio' activeStyle={{backgroundColor: '#AF4319'}} onClick={menuClick}>Portfolio</NavLink>
      </nav>
    </header>
  )
}

export default Header
