import React from "react";
import {Table} from "react-bootstrap";

const Stats = (props) =>{

    const c_stats = ['Intelligence', 'Strength', 'Speed', 'Durability', 'Power', 'Combat'];

    const rows = () => {
        return(
        <tbody>
            <tr>
                <td>{props.stats?.intelligence}</td>
                <td>{props.stats?.strength}</td>
                <td>{props.stats?.speed}</td>
                <td>{props.stats?.durability}</td>
                <td>{props.stats?.power}</td>
                <td>{props.stats?.combat}</td>
            </tr>
        </tbody>
    )}

    const colums = () =>{
        return(
            <thead>
            <tr>
                {c_stats.map( (s) => (
                    <th scope='col'>{s}</th>
                ))}
            </tr>
            </thead>
        )
    }

    return(
        <div>
            <h4>Stats</h4>
            <Table>
                {colums()}
                {rows()}
            </Table>
        </div>
    )
}

export default Stats;