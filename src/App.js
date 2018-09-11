import React from "react";
import { Provider } from "react-redux";
import { Route, Router, Switch } from "react-router-dom";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { getAllMeals } from "./actions";
import "./App.css";
import Whoops404 from "./components/./Whoops404";
import AddMealForm from "./components/meals/AddMealForm";
import DeleteMeal from "./components/meals/DeleteMeal";
import GetMeals from "./components/meals/GetMeals";
import Meal from "./components/meals/Meal";
import UpdateMealForm from "./components/meals/UpdateMealForm";
import AdminMenu from "./components/menus/AdminMenu";
import CreateMenuPage from "./components/menus/CreateMenuPage";
import GetMenu from "./components/menus/GetMenu";
import UserMenu from "./components/menus/UserMenu";
import AdminOrders from "./components/orders/AdminOrders";
import CreateOrder from "./components/orders/CreateOrder";
import GetOrderHistory from "./components/orders/GetOrderHistory";
import GetOrders from "./components/orders/GetOrders";
import AdminLoginForm from "./components/users/AdminLoginForm";
import AdminSignupForm from "./components/users/AdminSignupForm";
import LoginForm from "./components/users/LoginForm";
import SignupForm from "./components/users/SignupForm";
import history from "./history";
import mainReducer from "./reducers";

const store = createStore(
  mainReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

store.dispatch(getAllMeals());

class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const supportsHistory = "pushState" in window.history;

    return (
      <Provider store={store}>
        <Router history={history} forceRefresh={supportsHistory}>
          <Switch>
            <Route exact path="/" component={SignupForm} />
            <Route exact path="/signup" component={SignupForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/addMeal" component={AddMealForm} />
            <Route path="/updateMeal" component={UpdateMealForm} />
            <Route path="/getMeals" component={GetMeals} />
            <Route path="/deleteMeal" component={DeleteMeal} />
            <Route path="/getMenu" component={GetMenu} />
            <Route path="/createMenu" component={CreateMenuPage} />
            <Route path="/createOrder" component={CreateOrder} />
            <Route path="/getOrder" component={GetOrders} />
            <Route path="/Meal" component={Meal} />
            <Route path="/userMenu" component={UserMenu} />
            <Route path="/adminOrders" component={AdminOrders} />
            <Route path="/adminMenu" component={AdminMenu} />

            <Route path="/adminlogin" component={AdminLoginForm} />
            <Route path="/adminregister" component={AdminSignupForm} />

            <Route path="/history" component={GetOrderHistory} />
            <Route component={Whoops404} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
