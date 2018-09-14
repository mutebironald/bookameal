import React from 'react';
import { Button, Card, CardText, CardTitle, Collapse, Modal, ModalBody, ModalHeader, Nav, Navbar, NavbarBrand, NavbarToggler, NavLink } from 'reactstrap';
import '../.././index.css';
import CreateOrder from './CreateOrder';
import instance from '../../actions/instance';

const selectedStyle = {
        backgroundColor: "white",
        color: "slategasy"
      }

class GetOrders extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            order: [],
            modal: false
            }
            this.toggle = this.toggle.bind(this)
        };

    componentDidMount(){
        instance.get('/api/v1/orders')
        .then(response => {

            let meals = response;
           this.setState({ orderMeals: meals });
        })
    };

    toggle(){
        this.setState({
            modal: !this.state
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

                <div>
                </div>

        <div>
        <Card body outline color="sucess" style={{ width: "32rem", height:"12rem", margin: "10px"}} >
            <CardTitle className="text-center">Order</CardTitle>
            <CardText className="text-center"><strong>Id:</strong>{order.id}</CardText>
            <CardText className="text-center"><strong>Time:</strong>{order.order_time}</CardText>
        </Card>
        
        </div>

            <Button className="btn btn-success btn-sm" onClick={this.toggle} style={{ width: "4rem", height:"2rem"}}>Add</Button>
            <Modal isOpen={this.state.modal} backdropTransition={{ timeout: 1300 }}
            toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Menu</ModalHeader>
                <ModalBody>
                    <CreateOrder/>      
                </ModalBody>
            </Modal>



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
                        <NavLink href='/getMenu' activeStyle={selectedStyle}>Menu</NavLink>           
                        <NavLink href='/getOrder' activeStyle={selectedStyle}>Orders</NavLink>
                        </Nav>      
                    </Collapse>
                </Navbar>
                {this.returnOrder()}
                

            </div>
        );
    }
}
export default GetOrders;
