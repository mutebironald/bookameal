import React, { Component } from 'react';
import { Badge, Button, Col,
    Modal, ModalHeader, ModalBody,
    ModalFooter , Form, FormGroup,
    Collapse, Navbar, NavbarToggler,
    NavbarBrand, Nav, NavLink,
    Label} from 'reactstrap'

import Loader from 'react-loader'

import "../.././App.css"
import '../.././index.css';
import Notifications, {notify} from 'react-notify-toast';
import toastr from 'toastr';
import axios from "axios";


import AddMealForm from './AddMealForm';
import DeleteMeal from './DeleteMeal';
import UpdateMealForm from './UpdateMealForm'


const selectedStyle = {
    backgroundColor: "white",
    color: "slategasy"
  }



class GetMeals extends Component{
    constructor() {
        super();
    
        this.state = {
            meals: [],
            name :'',
            price:'',
            modal: false,
            id: null,
            modal1: false,
            modal2: false,
            fadeIn: true,
            loaded: false
        } 
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.toggle = this.toggle.bind(this)
        this.toggle1 = this.toggle1.bind(this)
        this.toggle2 = this.toggle2.bind(this)
    }

    onChange(event) {
        this.setState({ [event.target.name]: event.target.value});
        console.log(event.target.name)
        console.log(event.target.value)
    }
    
    onSubmit(event){
        event.preventDefault();
        console.log(JSON.stringify(this.state));
        this.props.updateMealRequest(this.props.id, this.state)
    
        this.setState({
            name:'',
            price:'',
            loaded: true
        })
    }

    toggle(id){
        this.setState({
            modal: !this.state.modal,
            id: id
        });
    }

    componentWillReceiveProps(){
        console.log("am here")
        axios.get('/api/v1/meals')
        .then(response =>  { console.log(response.data); return response.data })
        .then(resData => {
            let meals = resData.Meals
            this.setState({ meals: meals });

    })
}

    resetDeletion = () =>  this.setState({
            modal: !this.state.modal,
            id: null
        });

    deleteMeal = () =>{
        const id = this.state.id;
        axios.delete(`/api/v1/meals/` + id)
        .then(response =>  { console.log(response.data); return response.data })
        .then(resData => {

            let meals = resData
            console.log("deleted", meals)

            axios.get('/api/v1/meals')
            .then(response =>  { console.log(response.data); return response.data })
            .then(resData => {
    
                let meals = resData.Meals
               this.setState({ meals: meals })
    
               console.log("state", resData, "meals", meals, "this.state.meals", this.state.meals)
            })


        })
        


        //TODO: make request to delete meal, if request successfully or not successfully display a message
        this.resetDeletion();

    }
    

    toggle1(meal){
        console.log("id", meal.id, "name", meal.name, "price", meal.price)
        this.setState({
            modal1: !this.state.modal1,
            id: meal.id,
            name: meal.name,
            price: meal.price
        })
    }

    toggle2(){
        this.setState({
            modal2: !this.state.modal2,
        })
    }
    

    componentDidMount() {

        let green = { background: "green", text: "white" };
        notify.show("Meals", "custom", 5000, green )

         axios.get('/api/v1/meals')
        .then(response =>  { console.log(response.data); return response.data })
        .then(resData => {

            let meals = resData.Meals
           this.setState({ meals: meals });
           console.log("state", this.state.meals)
        })
    }

    onClick(){
        console.log("here")
    }
    
    render(){
    const {loaded}  = this.state
      return(
          <Col>

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

            <div class="float-right">
            {/* <Loader loaded={loaded}> */}
            <div>
                <Notifications/>
                
            {this.state.meals.map((meal, index) =>
                <div className="card mt-2" style={{ width: "32rem", height:"9rem", margin: "10px", color: "blue", float: "left"}} class="card border-success">
                <div className="row text-muted">
                <div className="col-md-12 meal-data text-center" >
                <h5><strong></strong>Meal</h5>
                </div>

                <div className="col-md-9 meal-data text-center">
                <h5><strong>Name: </strong>{meal.name}</h5>
                </div>

                <div className="col-md-3">
                    <span className=" btn btn-danger btn-sm" onClick={()=>this.toggle(meal.id)} style={{ width: "4rem", height:"2rem"}}>Delete</span>
                    
                </div>

                <div className="col-md-9 meal-data text-center">
                <h5><strong>Price: </strong>{meal.price}</h5>
    
                </div>
                
                <div className="col-md-3">
                    <span className="btn btn-success btn-sm" onClick={()=>this.toggle1(meal)}  style={{ width: "4rem", height:"2rem"}}>
                        Edit
                    </span> 
                               
                </div> 
                          
            </div>

            </div>
            )}

            <Modal isOpen={this.state.modal1} backdropTransition={{ timeout: 1300 }}
            toggle={this.toggle1} className={this.props.className}>
            <ModalHeader>Meals</ModalHeader>
            <ModalBody>
                <UpdateMealForm id={this.state.id} name={this.state.name} price={this.state.price} />
            </ModalBody>
            </Modal>


            <Modal isOpen={this.state.modal} backdropTransition={{ timeout: 1300 }}
                toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Meals</ModalHeader>
                <ModalBody>
                    <h4>Are you sure you want to delete this meal?</h4>
                  
                </ModalBody>
                <ModalFooter>
                    <button onClick={()=>this.deleteMeal()} className="btn btn-danger">Yes</button>
                    <button onClick={()=>this.resetDeletion()} className="btn btn-primary">No</button>
                </ModalFooter>
            </Modal>
            
        </div>

        <Button className="btn btn-success btn-sm" onClick={this.toggle2} style={{ width: "4rem", height:"2rem"}}>Add</Button>

            <Modal id="add" isOpen={this.state.modal2} backdropTransition={{ timeout: 1300 }}
            toggle={this.toggle2} className={this.props.className}>
                <ModalHeader toggle={this.toggle2}>Meals</ModalHeader>
                <ModalBody>
                    <AddMealForm/>      
                </ModalBody>
            </Modal>


        {/* </Loader> */}
        </div>
        </Col>
      )
    }
}

export default GetMeals;
