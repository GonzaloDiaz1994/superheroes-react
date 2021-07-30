import React from "react";
import Stats from "./Stats";
import Biography from "./Biography";
import Appearance from "./Appearance";
import Work from "./Work";
import Connections from "./Connections";

const  Description = (props) =>{

    return(
        <div>
            <h1>{props.name}</h1>
            <Biography bio={props.hero?.biography}/>
            <Appearance appearance={props.hero?.appearance}/>
            <Work work={props.hero?.work}/>
            <Connections connections={props.hero?.connections}/>
            <Stats stats={props.hero?.powerstats}/>
        </div>
    )
}

export default Description