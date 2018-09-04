import React, { Component } from 'react';

import { Badge, Button, Col,
    Modal, ModalHeader, ModalBody,
     ModalFooter , Form, FormGroup,
      Label, Input} from 'reactstrap'

import AddMealForm from './AddMealForm';

class AddMealModal extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isOpen: false
         };
    }

    toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

    render(){

    return(

    <Modal id="add" isOpen={this.state.modal} backdropTransition={{ timeout: 1300 }}
        toggle={this.toggle} className={this.props.className}>
        <ModalHeader toggle={this.toggle}>Meals</ModalHeader>
        <ModalBody>
            {/* // <h4>Are you sure you want to delete this meal?</h4> */}
            <AddMealForm/>
            
        </ModalBody>
        <ModalFooter>
            <button onClick={()=>this.deleteMeal()} className="btn btn-danger">Yes</button>
            <button onClick={()=>this.resetDeletion()} className="btn btn-primary">No</button>
        </ModalFooter>
    </Modal>

    );
}
}

export default AddMealModal;
