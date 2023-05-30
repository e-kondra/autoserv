import {useParams} from "react-router-dom";
import OrderItem from "./OrderItem";
import Table from "react-bootstrap/Table";


const ClientsOrders = ({orders}) => {

    let {id} = useParams();
    let filteredOrders = orders.filter((order) => order.client.id == id)
    // let filteredOrders = orders.filter((order => order.client.includes(parseInt(id)))
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
                {filteredOrders.map((order) => <OrderItem order={order}/>)}
            </tbody>
        </Table>
    )
}

export default ClientsOrders;