import React from "react";
import NavbarUser from "./components/pagesUser/navbarUser";
import "./App.css";
import Home from "./components/pagesUser/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/pagesUser/About";
import Services from "./components/pagesUser/Services";
import Download from "./components/pagesUser/Download";
import React, { Component }  from 'react';


function PagesUser() {
    return (
        <>
      <Router>
        <NavbarUser />
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/download" component={Download} />
        </Switch>
      </Router>
       
        </>
    )
} 

export default PagesUser;