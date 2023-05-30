import React from "react";
import Table from "react-bootstrap/Table";
import OrderItem from "./OrderItem";


const OrderList = ({orders}) => {
    console.log(orders)

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Date </th>
                    <th>Car Brand</th>
                    <th>Total</th>
                    <th>Comment</th>
                </tr>
            </thead>
            <tbody>
                {orders.map((order) => <OrderItem order={order}/>)}
            </tbody>
        </Table>
    )

};

export default OrderList;