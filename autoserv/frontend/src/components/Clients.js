import React from "react";
import Table from "react-bootstrap/Table";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavDropdown} from 'react-bootstrap/NavDropdown';
import {Link} from "react-router-dom";


const ClientItem = ({client}) => {
    return (
    <tr>
        <td>
            <Link to={`${client.id}`}>{client.name + " " + client.last_name}</Link>
        </td>
        <td>{client.phone}</td>
        <td>{client.address}</td>
        <td>{
            <Link to={`orders/${client.id}`}>orders</Link>
        }
        </td>
    </tr>
    )
};

const ClientList = ({clients}) => {
    console.log(clients)

    return (
    <div>
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">New Client</Navbar.Brand>

       </Container>
      </Navbar>
       <Table striped  bordered hover>
            <thead>
                <tr>
                    <th>name </th>
                    <th>phone</th>
                    <th>address</th>
                    <th>orders</th>
                </tr>
            </thead>
            <tbody>
                {clients.map((client) => <ClientItem client={client}/>)}
            </tbody>
       </Table>
     </div>
    )

};

export default ClientList;