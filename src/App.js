import React from "react";
import logo from "./logo.svg";
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";
import "./App.css";
import Contact from "./Components/Contacts";
import Barre from "./BarreDePlace";
import Home from "./Components/HomePage";
import All from "./Components/AllContacts";
import Ajout from "./Components/AjoutVoyage";
import { Button } from "reactstrap";
import Quest from "./AffichQuest";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div style={{ padding: "20px" }} id="menu">
          <Link
            to="/Components/Contacts"
            style={{
              marginBottom: "100%",
              tesxtDecoration: "none",
              fontFamily: "SHOWCARD GOTHIC ",
              float: "left",
              color: "black",
              fontSize: "30px",
            }}
          >
            gestion
          </Link>
          <Link
            to="/Components/Contacts"
            className="link"
            style={{
              fontSize: "px",
              textDecorationLine: "none",
              color: "black",
              fontWeight: "bold",
            }}
          >
            <span className="wourd">Citoyen</span>
          </Link>
          <Link
            to="/Components/AjoutVoyage"
            className="link"
            style={{
              fontSize: "px",
              textDecorationLine: "none",
              color: "black",
              fontWeight: "bold",
            }}
          >
            <span className="wourd">Chauffeur</span>
          </Link>
          <Link
            to="/Components/HomePage"
            className="link"
            style={{
              fontSize: "",
              textDecorationLine: "none",
              color: "black",
              fontWeight: "bold",
            }}
          >
            <span className="wourd">Accueil</span>
          </Link>
        </div>
        <Route exact path="/" component={Home} />
        <Switch>
          <Route exact path="/Components/HomePage" component={Home} />
          <Route exact path="/Components/AllContacts" component={All} />
          <Route path="/AffichQuest" component={Quest} />
          <Route path="/BarreDePlace" component={Barre} />
          <Route path="/Components/AjoutVoyage" component={Ajout} />
          <Route path="/Components/Contacts" component={Contact} />
        </Switch>
      </BrowserRouter>
    );
  }
}
