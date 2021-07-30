import React from "react";

const Work = (props) =>{
    return(
        <div>
            <h4>Work</h4>
            Occupation: {props.work?.occupation}<br/>
            Base: {props.work?.base}
        </div>
    )
}

export default Work;