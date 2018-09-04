import React, { Component } from '../../../../../Library/Caches/typescript/2.9/node_modules/@types/react';
import '../../App.css';

class DeleteMeal extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data: [
                {id:1, name: "Hello", price: "3000"},
                {id: 2, name: "World", price: "2000"},
                {id: 3, name: "Rice", price: "1200"},
                {id: 4, name: "Beans", price: "2000"},
                {id: 5, name: "Chicken", price: "1300"}
            ]
        }
    }

    delete(item){
        const data = this.state.data.filter(i => i.id !== item.id)
        this.setState({data})
    }

    render(){
        const listItem = this.state.data.map((item) => {
            return <div className="card mt-2">
            <div className="row text-muted">
                <div className="col-md-5 meal-data">
                <strong>Meal:</strong>{item.name}
                </div>
                <div className="col-md-4 meal-data">
                <strong>Price:</strong>{item.price}
                </div>
                <div className="col-md-3 p-2">
                <a href="/updateMeal" id = {item.price} className="btn btn-info btn-sm" role="button" aria-pressed="true">Edit meal</a>
                <br/><br/>
                <button className="btn btn-danger" onClick={this.delete.bind(this, item)}>
                    Delete
                </button>
                </div>
            </div>
</div>
        })
        return <div className="card mt-2">
                    {listItem}
               </div>

    }
}

export default DeleteMeal;


