import React from "react";

const Biography = (props) =>{

    return(
        <div>
            <h4>Biography</h4>
            Full name: {props.bio?.["full-name"]}<br/>
            Alter egos: {props.bio?.["alter-egos"]}<br/>
            Aliases: {props.bio?.aliases.map((a)=>(
            <div>{a}</div>))}
            Place of birth: {props.bio?.["place-of-birth"]}<br/>
            First appearence: {props.bio?.["first-appearance"]}<br/>
            Publisher: {props.bio?.publisher}<br/>
            Alignment: {props.bio?.alignment}
        </div>
    )
}

export default Biography;