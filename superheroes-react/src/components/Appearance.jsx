import React from "react";

const Appearance = (props) =>{


    return(
        <div>
            <h4>Appearance</h4>
            Gender: {props.appearance?.gender}<br/>
            Race: {props.appearance?.race}<br/>
            Height: {props.appearance?.height[1]}<br/>
            Weight: {props.appearance?.weight[1]}<br/>
            Eye color: {props.appearance?.["eye-color"]}<br/>
            Hair color: {props.appearance?.["hair-color"]}<br/>
        </div>
    )
}

export default Appearance;