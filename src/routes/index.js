import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Pokedex from "../pages/Pokedex";

export default function Routes() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/pokedex" exact component={Pokedex} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
