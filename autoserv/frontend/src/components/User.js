import React from "react";
import Table from "react-bootstrap/Table";

const UserItem = ({user}) => {
    return (
    <tr>
        <td>{user.username}</td>
        <td>{user.email}</td>
    </tr>
    )
};

const UserList = ({users}) => {
    console.log(users)

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => <UserItem user={user}/>)}
            </tbody>
        </Table>
    )

};

export default UserList;