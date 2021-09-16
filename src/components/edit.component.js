import React, { Component } from 'react';
import axios from 'axios';
import Avatar from 'avataaars';
import { generateRandomAvatarOptions } from './avatar';

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.onChangeUsersID =this.onChangeUsersID.bind(this);
    this.onChangeUsersName = this.onChangeUsersName.bind(this);
    this.onChangeItemsID =this.onChangeItemsID.bind(this);
    this.onChangeItemName =this.onChangeItemName.bind(this);
    this.onChangeOrdersID =this.onChangeOrdersID.bind(this);
    this.onChangeUser_ID =this.onChangeUser_ID.bind(this);
    this.onChangeOrder_ID =this.onChangeOrder_ID.bind(this);
    this.onChangeItem_ID =this.onChangeItem_ID.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      usersid:'',
      usersname:'',
      itemsid:'',
      itemsname:'',
      ordersid:'',
      user_id: '',
      order_id: '',
      item_id: '',
    }
  }

  componentDidMount() {
      axios.get('http://localhost:4000/users/edit/'+this.props.match.params.id)
          .then(response => {
              this.setState({ 
                user_id: response.data.user_id,
                order_id: response.data.order_id,
                item_id: response.data.item_id,
                ordersid:response.data.ordersid,
                itemsid:response.data.itemsid,
                itemsname:response.data.itemsname,
                usersid: response.data.usersid,
                usersname: response.data.usersname, 
                 });
          })
          .catch(function (error) {
              console.log(error);
          })
    }
    onChangeUsersID(e){
      this.setState({
          usersid: e.target.value
        });
    }
    onChangeUsersName(e) {
      this.setState({
        usersname: e.target.value
      });
    }
    onChangeItemsID(e){
      this.setState({
          itemsid: e.target.value
        });
    }
    onChangeItemsName(e){
      this.setState({
          itemsname: e.target.value
        });
    }
    onChangeOrdersID(e){
      this.setState({
          ordersid: e.target.value
        });
    }
    onChangeUser_ID(e){
      this.setState({
          user_id: e.target.value
        });
    }
    onChangeItems_ID(e){
      this.setState({
          item_id: e.target.value
        });
    }
    onChangeOrder_ID(e){
      this.setState({
          order_id: e.target.value
        });
    }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      user_id :this.state.user_id,
      order_id :this.state.order_id,
      item_id :this.state.item_id,
      usersname: this.state.usersname,
      usersid : this.state.usersid,
      itemsid : this.state.itemsid,
      itemsname :this.state.itemsname,
      ordersid : this.state.ordersid
    };
    axios.post('http://localhost:4000/users/update/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));
    
    this.props.history.push('/index');
  }
 
  render() {
    return (
      
        <div style={{ marginTop: 10 }}>
          <>
         
      <Avatar
        style={{ width: '100px', height: '100px' }}
        avatarStyle='Circle'
        {...generateRandomAvatarOptions() } />
        
    </>
            <h3 align="center">Update Order</h3>
            <form onSubmit={this.onSubmit}>
            <div className="form-group">
                    <label>User ID:</label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.user_id}
                      onChange={this.onChangeUserID}
                      />
                </div>
                <div className="form-group">
                    <label>Order ID:</label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.order_id}
                      onChange={this.onChangeOrderID}
                      />
                </div>
                <div className="form-group">
                    <label>Item ID:</label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.item_id}
                      onChange={this.onChangeItemID}
                      />
                </div>

                <div className="form-group">
                    <label>User Name:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.usersname}
                      onChange={this.onChangeUsersName}
                      />
                </div>
                <div className="form-group">
                    <label>Items Name:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.itemsname}
                      onChange={this.onChangeItemsName}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" value="Register" className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}