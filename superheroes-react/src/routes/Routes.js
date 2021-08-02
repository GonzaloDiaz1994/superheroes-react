import React from "react";
import {BrowserRouter, Switch} from "react-router-dom";
import PublicRoute from "./PublicRoute";
import Superhero from "../components/Superhero";
import About from "../components/About";
import Home from "../components/Home";
import Results from "../components/Results";
import NotFound from "../components/NotFound";

const Routes = () => {

    return (
        <BrowserRouter>
            <Switch>
                <PublicRoute path='/home' component={Home}/>
                <PublicRoute path='/superhero/:id' component={Superhero}/>
                <PublicRoute path='/about' component={About}/>
                <PublicRoute path='/search/:name' component={Results}/>
                <PublicRoute exact path='/' component={Home}/>
                <PublicRoute path='*' component={NotFound}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;