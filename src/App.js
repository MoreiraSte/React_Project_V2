
import React from "react";
import NavbarPublic from "./components/Navbar";
import NavbarUser from "./components/navbarUser";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import SignUp from "./components/pages/SignUp";
import Register from "./components/pages/Register";
import Download from "./components/pages/Download";


function App() {

  const Navbar = () => {
    return (
            <>
                
                {!localStorage.getItem('client') ? <NavbarUser /> : <NavbarPublic />}
                
        </>
    );
};

  return (
    <>
      <Router>
        <Navbar />
        {/* <NavbarUser/> */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/register" component={Register} />
          <Route path="/download" component={Download} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
