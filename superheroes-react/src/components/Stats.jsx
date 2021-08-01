import React from "react";
import {Accordion, Table} from "react-bootstrap";

const Stats = (props) => {

    const c_stats = ['Intelligence', 'Strength', 'Speed', 'Durability', 'Power', 'Combat'];

    const rows = () => {
        return (
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
        )
    }

    const colums = () => {
        return (
            <thead>
            <tr>
                {c_stats.map((s) => (
                    <th scope='col'>{s}</th>
                ))}
            </tr>
            </thead>
        )
    }

    return (
        <>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Stats</Accordion.Header>
                    <Accordion.Body>
                        <Table responsive>
                            {colums()}
                            {rows()}
                        </Table>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    )
}

export default Stats;