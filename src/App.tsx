import { FC } from "react"; //import React from "react";
import Navigation from "./components/Navigation";
//import { BrowserRouter as Router, Route } from "react-router-dom";

//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';//weird behaviour over hear w e switch causx errors in e prev line(3)

//import routes from "./routes";
import { useStyles } from "./styles";
import Dashboard from "./pages/Dashboard";
import Accounts from "./pages/Account";
import Trips from "./pages/Transaction";
import Settings from "./pages/Settings";
//import SignOut from "./pages/SignOut";
import Secure from "./pages/Secure";

//import React from 'react'

import "./App.css";


const App: FC = () => {
  const classes = useStyles();
  return (   ///look at this approot thing
    <div className={classes.appRoot}>
      <div className="App">
        <Router>
          <Navigation />
          <div>
            <Switch>
              <Route path="/" exact>
                <Dashboard />
              </Route>

              <Route path="/accounts" exact>
                <Accounts />
              </Route>

              <Route path="/transactions" exact> {/*trips*/}
                <Dashboard />
              </Route>

              {/*<Route path="/sign-out" exact>
                <SignOut />
              </Route>*/}

              <Route path="/secure" exact> {/*trips*/}
                <Secure/>
              </Route>

              <Route path="/settings" exact> {/*trips*/}
                <Settings />
              </Route>

            </Switch>
          </div>
          
        </Router>
      </div>
    </div>
  );
};

export default App;

