import React from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./componets/Nav";
import Productlist from "./componets/Productlist";
import Details from "./componets/Details";
import Cart from "./componets/Cart";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Nav} />
      <Switch>
        <Route exact path="/" component={Productlist} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </div>
  );
}

export default App;
