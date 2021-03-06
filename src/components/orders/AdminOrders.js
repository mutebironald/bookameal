import React from 'react';
import { Collapse, Modal, ModalBody, ModalFooter, ModalHeader, Nav, Navbar, NavbarBrand, NavbarToggler, NavLink } from 'reactstrap';
import '../.././index.css';
import instance from '../../actions/instance';
import GetCustomerHistory from './GetCustomerHistory';
const selectedStyle = {
        backgroundColor: "white",
        color: "slategasy"
      }


export class AdminOrders extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            order: [],
            modal: false,
            modal1: false,
            }
            this.toggle = this.toggle.bind(this)
            this.toggle1 = this.toggle1.bind(this)
        };

    componentDidMount(){
        instance.get('/api/v1/orders', {headers:{"Authorization": localStorage.getItem('Authorization')}})
        .then(res => {
            let meals = res.data
           this.setState({ orderMeals: meals });
        })
    };

    toggle(){
        this.setState({
            modal: !this.state
        })
    }

    toggle1(){
        this.setState({
            modal1: !this.state.modal1
        })
    }

    returnOrder = () =>{
        const  order = this.state;

        if(order.orderMeals === undefined){
            
            return (
                <div>
               <h2 class="text-white">No orders yet</h2>
                </div>
            );
        }else {
           return (
           
           order.orderMeals.orders.map((order) =>(
                
        <div>


        <div style={{ width: "32rem", height:"12rem", margin: "10px"}} className="card mt-2 border-success text-center center">
            <div className="row text-bold " >
                
            <div className="col-md-9 meal-data text-center">
                <strong>Id:</strong>{order.id}
            </div>

            <div className="col-md-9 meal-data text-center">
                <strong>Price:</strong>(order.price)
            </div>

            <div className="col-md-9 meal-data text-center">
                <strong>Time:</strong>{order.order_time}
            </div>
            

            <div className="col-md-9 meal-data text-center">
                <strong>Ordered By:</strong>{order.user}
            </div>

            <div className="col-md-3 meal-data text-center">
                <span className="btn btn-success btn-sm" onClick={() => this.toggle1()}>Order History</span>
            </div>
        </div>
        <Modal isOpen={this.state.modal1} backdropTransition={{ timeout: 1300}}
        toggle={this.toggle1} className={this.props.className}>
        <ModalHeader toggle={this.toggle1} class="modal">History</ModalHeader>
        <ModalBody class="modal-main">
            <GetCustomerHistory />
        </ModalBody>
        <ModalFooter>
        </ModalFooter>
        </Modal>




        </div>
        </div>
            )));
            
        }
    }
    render() {
        return (
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
                {this.returnOrder()} 

            </div>
        );
    }
}
export default AdminOrders;
