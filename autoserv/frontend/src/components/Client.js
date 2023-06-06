import React from "react";
import {useParams} from "react-router-dom";
import OrderItem from "./OrderItem";
import {Row, Container} from "react-bootstrap"
import Form from "react-bootstrap/Form";


const Client = ({clients}) => {
    let {id} = useParams();
    let fClient = clients.filter((client) => {return client.id === parseInt(id)})[0];
    let data;

    if (fClient.is_entity ){
       data =
       <Row>
           <Form.Group className="col-md-6">
                <Form.Label htmlFor="ClientsCode">Entities Code</Form.Label>
                <Form.Control id="ClientsCode" type="text" placeholder={fClient.client_code} />
           </Form.Group>
           <Form.Group className="col-md-6">
                <Form.Label htmlFor="ClientsPVM">PVM Code</Form.Label>
                <Form.Control id="ClientsPVM" type="text" placeholder={fClient.pvm} />
           </Form.Group>
       </Row>
       };

    return (
        <form>
            <Container>
                <Row>
                    <Form.Group className="col-md-6">
                        <Form.Label htmlFor="ClientsName">Name</Form.Label>
                        <Form.Control id="ClientsName" type="text" placeholder={fClient.name} />
                    </Form.Group>
                    <Form.Group className="col-md-6">
                        <Form.Label htmlFor="ClientsLastName">Last Name</Form.Label>
                        <Form.Control id="ClientsLastName" type="text" placeholder={fClient.last_name}/>
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group className="col-md-6">
                        <Form.Label htmlFor="ClientsPhone">Phone</Form.Label>
                        <Form.Control id="ClientsPhone" type="text" placeholder={fClient.phone} />
                    </Form.Group>
                    <Form.Group className="col-md-6">
                        <Form.Label htmlFor="ClientsEmail">Email</Form.Label>
                        <Form.Control id="ClientsEmail" type="text" placeholder={fClient.email}/>
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group className="col-md-12">
                        <Form.Label htmlFor="ClientsAddress">Address</Form.Label>
                        <Form.Control id="ClientsAddress" type="text" placeholder={fClient.address} />
                    </Form.Group>
                </Row>

                 {data}

                 <Row>
                    <Form.Group className="col-md-6">
                        <Form.Check checked={fClient.is_entity} type="checkbox" label ="Is Entity"/>
                    </Form.Group>
                    <Form.Group className="col-md-6">
                        <Form.Check checked={fClient.is_actual} type="checkbox" label ="Is Active"/>
                    </Form.Group>
                </Row>
            </Container>
        </form>

    )
};

export default Client;