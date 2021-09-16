import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import MapSection from './components/map/Map' // import the map here
import Create from './components/create.component';
import Edit from './components/edit.component';
import Index from './components/index.component';
import Avatar from 'avataaars';
import { generateRandomAvatarOptions } from './avatar';


const location = {
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 37.42216,
  lng: -122.08427,
} 
class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand"></Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                  <Link to={'/'} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/create'} className="nav-link">Add order</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/index'} className="nav-link">Manage Orders</Link>
                </li>
                <li className="nav-item">
                  <Link to={'http://nithyabalasundar.uta.cloud/my_react_app/geocode.html'} className="nav-link">Geocode</Link>
                </li>
              </ul>
            </div>
          </nav> <br/>
          <>
          <Avatar
           style={{ width: '100px', height: '100px' }}
           avatarStyle='Circle'
           {...generateRandomAvatarOptions() } />
           
       </>
          
          <Switch>
              <Route exact path='/create' component={ Create } />
              <Route path='/edit/:id' component={ Edit } />
              <Route path='/index' component={ Index } />
          </Switch>
          <h2>Welcome Admin:)!</h2> <br/>
          <MapSection location={location} zoomLevel={17} />
        </div>
      </Router>
    );
  }
}

export default App;