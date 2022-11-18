
import React,{useEffect} from "react";

import NavbarUser from "./components/navbarUser";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import SignUp from "./components/pages/SignUp";
import Register from "./components/pages/Register";
import Download from "./components/pages/Download";
import CartaoPage from "./components/pages/PerfilCartao";
import EmprestPage from "./components/pages/PerfilEmprestimo";
import SaldoPage from "./components/pages/PerfilSaldo";
import TransfPage from "./components/pages/PerfilTranferencias";
import cadastroBanco from "./components/pages/cadastroBanco";



import './perfil.css';



function App() {
 

  return (
    <>
      <Router>
        
        <NavbarUser/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/register" component={Register} />
          <Route path="/download" component={Download} />
          <Route path="/cartao"  component={CartaoPage} />
          <Route path="/emprestimo"  component={EmprestPage} />
          <Route path="/saldo"  component={SaldoPage} />
          <Route path="/transferencia"  component={TransfPage} />
          <Route path="/cadastroBanco"  component={cadastroBanco} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
