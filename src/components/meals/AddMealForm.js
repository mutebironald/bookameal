import React from 'react';
import axios from 'axios'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addMealRequest } from '../../actions/addMealRequest'
import "../.././App.css"

import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button, FormText,
  } from 'reactstrap';
  
  import Notifications, {notify} from 'react-notify-toast';
  import toastr from 'toastr';


class AddMealForm extends React.Component {
    constructor(props){
    super(props);
    this.state = {
        name :'',
        price:''
        }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(event) {
        this.setState({ [event.target.name]: event.target.value});
        console.log(event.target.name)
        console.log(event.target.value)
    }

    componentDidMount(){
        let green = { background: "green", text: "white" };
        notify.show("Create Meal", "custom", 5000, green )
    }

    onSubmit(event){
        event.preventDefault();
        if (this.state.name.trim() && this.state.price.trim()){
            this.props.addMealRequest(this.state)
            .then(response => {
                if(response.addMeal){
                    toastr.success(response.message)
                    axios.get('/api/v1/meals')
                    .then(response =>  { console.log(response.data); return response.data })
                    .then(resData => {

                        let meals = resData.Meals
                    this.setState({ meals: meals })

                    console.log("state", meals)
                    
                    })
                }
                else{
                    toastr.warning(response.message)
                }
            })
            .then(axios.get('/api/v1/meals'))
            
            

            this.setState({
                name:'',
                price:'',
                meals: this.state.meals
            })
        }
    }

    render(){
        return (
            <Container>
            <Form onSubmit={this.onSubmit}>
            <Notifications/>
                <h4>Add meal</h4>

                <div className="form-group">
                <Col>
                <FormGroup>
                    <Label className="control-label">Name</Label>
                    <input
                        value={this.state.name}
                        onChange={this.onChange}
                        type="text"
                        name="name"
                        className="form-control"
                    />
                    </FormGroup>
                    </Col>
                </div>


                <div className="form-group">
                <Col>
                <FormGroup >
                    <Label className="control-label">Price</Label>
                    <Input
                        value={this.state.price}
                        onChange={this.onChange}
                        type="number"
                        name="price"
                        className="form-control"
                    />
                    <FormText><p>Price is an Integer</p></FormText>

                    </FormGroup>
                    </Col>
                </div>

                <div className="form-group">
                    <Button className="btn btn-primary btn-success" >
                        Add Meal
                    </Button>
                </div>

            </Form>
            </Container>
        );
    }
}
AddMealForm.propTypes = {
    addMealRequest: PropTypes.func.isRequired
}


export default connect (null, {addMealRequest})(AddMealForm);
