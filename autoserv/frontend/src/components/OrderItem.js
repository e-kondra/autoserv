import React from "react";

const OrderItem = ({order}) => {
    return (
    <tr>
        <td>{order.date_create}</td>
        <td>{order.car_brand}</td>
        <td>{order.total}</td>
        <td>{order.comment}</td>
    </tr>
    )
};
export default OrderItem;