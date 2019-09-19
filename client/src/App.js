import React from 'react';
import Home from "./components/Home";
import Departments from "./components/Departments"
import NoMatch from "./components/NoMatch";
import NavBar from "./components/NavBar";
import ItemForm from "./components/ItemForm";
import Items from "./components/Items";
import DepartmentForm from "./components/DepartmentForm"
import Department from "./components/Department";
import { Switch, Route, } from "react-router-dom";
import { Header, Button, Container, } from "semantic-ui-react";

const App = () => (
  <>
  <NavBar />
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/departments" component={Departments} />
        <Route exact path="/departments/new" component={DepartmentForm} />
        <Route exact path="/departments/:id" component={Department} />
        <Route exact path="/departments/:id/item" component={Items} />
        <Route exact path="/departments/:id/new" component={ItemForm} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
    </>
);

export default App;
