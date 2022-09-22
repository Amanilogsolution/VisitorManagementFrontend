
import Dashboard from './components/dashboard/Dashboard';
import Login from './components/Login/Login'
import DieselLog from './components/diesellog/DieselLog';
import GeneratorLogBook from './components/generatorlog/GeneratorLog';
import Visitor from './components/visitor/Visitor'
import Warehouse from './components/Warehouse/Warehouse'
import Vehicle from './components/vehicle/vehicle';
import PrivatRoute from './components/PrivateRoute/PrivateRoute';

import {Route,Switch,BrowserRouter as Router} from 'react-router-dom'
function App() {
  return (
    <div className="App">
     <Router>
     <Switch>
         <Route exact path="/" component={Login}/>
         <PrivatRoute exact path="/Dashboard" component={Dashboard}/>
         <PrivatRoute exact path="/DieselLog" component={DieselLog}/>
         <PrivatRoute exact path="/GeneratorLogBook" component={GeneratorLogBook}/>
         <PrivatRoute exact path="/VisitorLogBook" component={Visitor}/>
         <PrivatRoute exact path="/Warehouse" component={Warehouse}/>
         <PrivatRoute exact path="/Vehicle" component={Vehicle}/>
     </Switch>
     </Router>

    </div>
  );
}

export default App;
