import React from 'react'
import { Switch, Route } from 'react-router-dom'
import SignupForm from './users/SignupForm'
import LoginForm from './users/LoginForm'
import AddMealForm from './meals/AddMealForm'
import UpdateMealForm from './meals/UpdateMealForm'
import GetMeals from './meals/GetMeals'
import GetMealPage from './meals/GetMealPage'
import DeleteMeal from './meals/DeleteMealPage'
// import GetMenu from './menu/GetMenu'

const Content = () => {
  return (
    <Switch>
    <Route exact path="/signup" component={SignupForm}/>
    <Route path="/login" component={LoginForm}/>
    <Route path="/addMeal" component={AddMealForm}/>
    <Route path="/updateMeal" component={UpdateMealForm}/>
    <Route path="/getMeals" component={GetMeals}/>
    <Route path="/get" component={GetMealPage}/>
    <Route path="/deleteMeal" component={DeleteMeal}/> 
    {/* <Route path="/getMenu" component={GetMenu}/> */}
  </Switch>
  )
}

export default Content
