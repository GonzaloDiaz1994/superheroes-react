import React from "react";
import Stats from "./Stats";
import Biography from "./Biography";
import Appearance from "./Appearance";
import Work from "./Work";
import Connections from "./Connections";

const Description = (props) => {

    return (
        <>
            <h1>{props.name}</h1>
            <Biography bio={props.hero?.biography} key={props.hero?.id}/>
            <Appearance appearance={props.hero?.appearance} key={props.hero?.id}/>
            <Work work={props.hero?.work} key={props.hero?.id}/>
            <Connections connections={props.hero?.connections} key={props.hero?.id}/>
            <Stats stats={props.hero?.powerstats} key={props.hero?.id}/>
        </>
    )
}

export default Description