import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';


export default class Index extends Component {

  constructor(props) {
      super(props);
      this.state = {users: []};
    }
    componentDidMount(){
      axios.get('http://localhost:4000/users')
        .then(response => {
          this.setState({ users: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    tabRow(){
      return this.state.users.map(function(object, i){
          return <TableRow obj={object} key={i} />;
      });
    }

    render() {
      return (
        <div>
          <h3 align="center">Orders List</h3>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                
                <th>User Id</th>
                <th>Order Id</th>
                <th>Item Id</th>
                <th>User Name</th>
                <th>Items</th>
                
                <th colSpan="4">Actions</th>
              </tr>
            </thead>
            <tbody>
              { this.tabRow() }
            </tbody>
          </table>
        </div>
      );
    }
  }