import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./componets/Nav";
import Productlist from "./componets/Productlist";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Nav} />
      <Switch>
        <Route exact path="/" component={Productlist} />
      </Switch>
    </div>
  );
}

export default App;
