import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'; 
import Createemployee from './component/CreateEmployee';
import EmployeeList from './component/EmployeeList';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">
            <nav className =" navbar navbar-expand-lg navbar-light bg-light">
              <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                 <UncontrolledDropdown>
                   <DropdownToggle nav caret>
                     Master Employee
                   </DropdownToggle>
                   <DropdownMenu right>
                     <DropdownItem>
                     <li className="nav-item">
                      <Link to={'/Createemployee'} className="nav-link">Add Employee</Link>
                    </li>
                     </DropdownItem>
                     <DropdownItem>
                     <li className="nav-item">
                        <Link  to={'/EmployeeList'} className="nav-link">Employee List</Link>
                    </li>
                     </DropdownItem>
                   </DropdownMenu>
                 </UncontrolledDropdown>
                </ul>
              </div>
            </nav>
            <Switch>
            <Route exact path='/Createemployee' component={Createemployee} /> 
            <Route path='/EmployeeList' component={EmployeeList}/>
            </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
