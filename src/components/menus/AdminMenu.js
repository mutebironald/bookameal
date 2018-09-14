import axios from 'axios';
import instance from '../../actions/instance';
import React from 'react';
import { Button, Col, Collapse, Modal, ModalBody, ModalHeader, Nav, Navbar, NavbarBrand, NavbarToggler, NavLink } from 'reactstrap';
import '../.././App.css';
import '../.././index.css';
import getCurrentDay from '../current';
import WeekDays from '../Weekdays';
import CreateMenuPage from './CreateMenuPage';

const selectedStyle = {
    backgroundColor: "white",
    color: "slategasy"
  }

export class AdminMenu extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            menus: [],
            modal: false,
            currentMenu: {
                day: "",
                meals: []
                
              }
            }
            this.toggle = this.toggle.bind(this)
            this.getMenus = this.getMenus.bind(this)
        };


    getMenus = () => {
        instance.get(`api/v1/menu`, {headers:{"Authorization": localStorage.getItem('Authorization')}})
        .then(response => {
            const today = getCurrentDay();
            
            const currentMenu = response.data.Menu.find(
             menu => today.toLowerCase() === menu.day
            );
            this.setState({
              menus: response.data.Menu,
              currentMenu
            });
          })
        }

    getMenu = day => {
        day = day.charAt(0).toUpperCase() + day.slice(1);
        const { menus } = this.state;
        const currentMenu = menus.find(menu => day.toLowerCase() === menu.day);
        this.setState({ currentDay: day.toLowerCase(), currentMenu: currentMenu });
    };

    componentDidMount() {
        this.getMenus();
      }  
    
    toggle(){
        this.setState({
            modal: !this.state.modal,
        })
    }

    returnMenu = () =>{
        const  currentMenu = this.state.currentMenu;

        if(currentMenu.meals.length === undefined){
            return (
                <div>
               <h2 class="text-white">No meals in menu</h2>
                <Button className="btn btn-success btn-sm" onClick={this.toggle} style={{ width: "4rem", height:"2rem"}}>Add</Button>
                <Modal isOpen={this.state.modal} backdropTransition={{ timeout: 1300 }}
                toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Menu</ModalHeader>
                    <ModalBody>
                        <CreateMenuPage/>      
                    </ModalBody>
                </Modal>
                </div>
            );
            
        }else {
           return (
               <Col>
               <div>

                <Navbar color="success" light expand="md">
                <NavbarBrand href="/">Book-A-Meal | Home </NavbarBrand>
                <NavbarToggler onClick={this.toggle}/>
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                    <NavLink href='/getMeals' activeStyle={selectedStyle}>Meals</NavLink>
                    <NavLink href='/adminMenu' activeStyle={selectedStyle}>Menu</NavLink>           
                    <NavLink href='/adminOrders' activeStyle={selectedStyle}>Orders</NavLink>
                    <NavLink href='/adminlogin' activeStyle={selectedStyle}>Logout</NavLink>
                    </Nav>      
                </Collapse>
                </Navbar>
                
                <button className="btn btn-success btn-sm" onClick={this.toggle} style={{ width: "4rem", height:"2rem",  margin: "10px"}}>Add</button>

                <div className="row">
                <div className="col-md-2">
                <div className="header text-center" style={{ margin: "5px"}}><strong><h3>Weekday</h3></strong></div>
                <ul className="list-group">
                    <WeekDays getMenu={this.getMenu} />
                </ul>
                </div>
                
            {currentMenu.meals.map((menu) =>
                
                <div className="card mt-2" style={{ width: "25rem", height:"5rem", margin: "10px"}} class="card mt-2 border-success text-center center">
                <div className="row text-bold">
                
                <div className="col-md-5 meal-data text-center">
                    <strong>Meal:</strong>{menu.name}
                </div>

                <div className="col-md-4 meal-data text-center">
                    <strong>Price:</strong>{menu.price}
                </div>

                </div>
                                   
                </div>
                
               
            )}
            <Modal isOpen={this.state.modal} backdropTransition={{ timeout: 1300 }}
            toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Menu</ModalHeader>
                <ModalBody>
                    <CreateMenuPage/>  
                </ModalBody>
            </Modal>

            </div>
            </div>
        
            </Col>

        );
            
        }
    }
    render() {
        return (
            <div>
                {this.returnMenu()}
                
            </div>
        );
    }
}
export default AdminMenu;
