import React from "react";
import {useParams} from "react-router-dom";
import OrderItem from "./OrderItem";
import Form from "react-bootstrap/Form";


const Client = ({clients}) => {
    let {id} = useParams();
    console.log(clients)
    console.log(id)

    let fClient = clients.filter(client => client.id === id);

    console.log(fClient)
    return (
        <form>
            <Form.Control size="lg" type="text" placeholder={fClient.name} />
            <br />
            <Form.Control type="text" placeholder={fClient.last_name} />
        </form>
    )
};

export default Client;