import React from "react";
import {Route} from "react-router-dom";

const PublicRoute = (props) =>{
    const {path, component} = props;

    return(
        <Route path={path} component={component}/>
    )
}

export default PublicRoute;