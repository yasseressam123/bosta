import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap';
import './App.css';
import Navbar from './components/header';
import Home from './pages/home/home';
import Shipment from './pages/shipment/shipment-parent';

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar/>
      <Router>
        {/* <Switch> */}
         <Route exact path="/" component={Home}>
          </Route>
          <Route  path="/tracking-shipment/" component={Shipment}>
          </Route>
          {/* <Route path="/users">
            <Users />
          </Route> */}
        {/* </Switch> */}
      </Router>
    </div>
  );
}

export default App;
