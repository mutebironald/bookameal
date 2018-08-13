
<btn onClick={ this.deleteHandler.bind(this, i)} className="btn btn-danger btn-sm">Delete</btn>

deleteHandler(i, e){
    e.preventDefault();
    this.props.onDelete(this.props.meals[i].id);

};
