import React from "react";
import {BrowserRouter, Switch} from "react-router-dom";
import PublicRoute from "./PublicRoute";
import Superhero from "../components/Superhero";
import About from "../components/About";
import Home from "../components/Home";

const Routes = () =>{

    return(
        <BrowserRouter>
            <Switch>
                <PublicRoute path='/superheroe/:id' component={Superhero}/>
                <PublicRoute path='/about' component={About}/>
                <PublicRoute path='/' component={Home}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;