import React, { Component } from 'react';
import GetMeals from './GetMeals';
import AddMealForm from './AddMealForm'
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../.././App.css"

import { Button, Modal, ModalHeader, ModalBody, ModalFooter , Form, FormGroup, Label, Input} from 'reactstrap'

export default class Meal extends Component {
    
    constructor(props){
        super(props);
        this.state ={
            modal: false
        };

        this.toggle =this.toggle.bind(this);
    }

    toggle(){
        this.setState({
            modal: !this.state.modal
        });
    }


    render() {
        return (
            <div >
                <div>
                    {/* <h2>Meals</h2> */}
                    <GetMeals/>
                </div>
                <div>
                    <Button color="success" onClick={this.toggle}>Add Meal </Button>
                    <Modal isOpen={this.state.modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
                    toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Update Meal</ModalHeader>
                    <ModalBody>
                        <AddMealForm/>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Do something</Button>{ ' ' }
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                    </Modal>
                </div>
                </div>

            // </div>
        )
    }
}

// export default Meal;
