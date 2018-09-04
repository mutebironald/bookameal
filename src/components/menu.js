import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <ul class="navbar-nav">
      <li class="nav-item active">
      <Link to={'/Login'}>Login</Link>
      </li>
      <li class="nav-item">
      <Link to={'/updateMeal'}>UpdateMeal</Link>
      </li>
      <li class="nav-item">
      <Link to={'/addMeal'}>AddMeal</Link>
      </li>
      <li className="nav-item">
            <Link to={'/getMeals'}>GetMeals</Link>
      </li>
      <li className="nav-item">
            <Link to={'/deleteMeal'}>DeleteMeal</Link>
      </li>
      <li className="nav-item">
            <Link to={'/getMenu'}>GetMenu</Link>
      </li>
    </ul>
  )
}

export default Menu

{/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <Link to={'/signup'}>Signup</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
      <Link to={'/Login'}>Login</Link>
      </li>
      <li class="nav-item">
      <Link to={'/updateMeal'}>UpdateMeal</Link>
      </li>
      <li class="nav-item">
      <Link to={'/addMeal'}>AddMeal</Link>
      </li>
      <li className="nav-item">
            <Link to={'/getMeals'}>GetMeals</Link>
      </li>
      <li className="nav-item">
            <Link to={'/deleteMeal'}>DeleteMeal</Link>
      </li>
      <li className="nav-item">
            <Link to={'/getMenu'}>GetMenu</Link>
      </li>
    </ul>
  </div>
</nav> */}
