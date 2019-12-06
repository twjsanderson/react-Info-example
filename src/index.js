import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // must put these in to use bootstrap
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import Information1 from './components/Information1'; 
import Information2 from './components/Information2'; 
import Information3 from './components/Information3'; 
import './index.css';


ReactDOM.render(
  <Router>
    <Navbar className="bg-warning">
      <Link className="p-3" to="/">Information1</Link>
      <Link className="p-3" to="/information2">Information2</Link>
      <Link className="p-3" to="/information3">Information3</Link>
    </Navbar>
    <Switch>
        <Route exact path="/" component={Information1} />
        <Route path="/information2" component={Information2} />
        <Route path="/information3" component={Information3} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
