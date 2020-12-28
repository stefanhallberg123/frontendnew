import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StartMessages from "./components/admin/Start_message/StartMessage";
import StartCars from "./components/admin/Start_car/StartCar";
import AddMessage from "./components/admin/Start_message/Add_message/AddMessage";
import Navbar from "./components/admin/Navbar/Navbar";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/admin" component={Navbar}>
            <Route
              exact
              path="/admin/messages"
              component={StartMessages}
            ></Route>
            <Route exact path="/admin/cars" component={StartCars}></Route>
            <Route
              exact
              path="/admin/messages/add/:id"
              component={AddMessage}
            ></Route>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
