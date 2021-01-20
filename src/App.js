import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StartMessages from "./components/admin/Start_message/StartMessage";
import AddMessage from "./components/admin/Start_message/Add_message/AddMessage";
import Home from "./components/customer/Home/Home";
import AllCars from "./components/customer/AllCars/AllCars";
import About from "./components/customer/About/About";
import CarsId from "./components/customer/AllCars/CarsId/CarsId";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/admin/messages" component={StartMessages}></Route>
          {/* <Route exact path="/admin/cars" component={StartCars}></Route> */}
          <Route
            exact
            path="/admin/messages/add/:id"
            component={AddMessage}
          ></Route>
          <Route exact path="/cars/:id" component={CarsId}></Route>
          <Route exact path="/cars" component={AllCars}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/" component={Home}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
