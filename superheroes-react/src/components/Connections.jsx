import React from "react";

const Connections = (props) =>{

    return(
        <div>
            <h4>Connections</h4>
            Group affiliation: {props.connections?.["group-affiliation"]}<br/>
            Relatives: {props.connections?.relatives}
        </div>
    )
}

export default Connections;