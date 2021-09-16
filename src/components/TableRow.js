import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TableRow extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.get('http://localhost:4000/users/delete/'+this.props.obj._id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
    }
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.user_id}
          </td>
          <td>
            {this.props.obj.item_id}
          </td>
          <td>
            {this.props.obj.order_id}
          </td> 
          <td>
            {this.props.obj.usersname}
          </td>
          <td>
            {this.props.obj.usersid}
          </td>
          <td>
            {this.props.obj.itemsname}
          </td>
          <td>
            {this.props.obj.itemsid}
          </td>
          <td>
            {this.props.obj.ordersid}
          </td>
          <td>
          <Link to={"/edit/"+this.props.obj._id} className="btn btn-primary">Edit</Link>
          </td>
          <td>
            <button onClick={this.delete} className="btn btn-danger">Delete</button>
          </td>
        </tr>
    );
  }
}

export default TableRow;