import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import React from 'react';
import UserList from "./components/User";
import ClientList from "./components/Clients";
import OrderList from "./components/Orders";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import NotFound404 from "./components/NotFound404";
import ClientsOrders from "./components/ClientsOrders";
import Client from "./components/Client";
import axios from 'axios';
import {Routes, Route, BrowserRouter, Link, Navigate} from "react-router-dom";


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        'users': [],
        'orders': [],
        'clients': []
    }
  };

  componentDidMount(){
    axios.get("http://127.0.0.1:8000/api/users/").then(
        response => {
            const users = response.data
            this.setState({
                'users': users
            })
        }
    ).catch(error => console.log(error));

    axios.get('http://127.0.0.1:8000/api/orders/').then(
        response => {
            const orders = response.data
            this.setState({
                'orders': orders
            })
        }
    ).catch(error => console.log(error));

    axios.get('http://127.0.0.1:8000/api/clients/').then(
        response => {
            const clients = response.data
            this.setState({
                'clients': clients
            })
        }
    ).catch(error => console.log(error));
  }

  render(){
    return(
      <div>
          <BrowserRouter>
            <Menu/>
            <Routes>
                <Route path='/users' element={<UserList users={this.state.users}/>} exact />
                <Route path='/' element={<OrderList orders={this.state.orders}/>} exact />
                <Route path='/clients' element={<ClientList clients={this.state.clients} exact />}/>
                <Route path='/clients/orders/:id' element={<ClientsOrders orders={this.state.orders}/>}/>
                <Route path='/clients/client/:id' element={<Client clients={this.state.clients}/>}/>
//                <Route path="/user" element={<Navigate to="/users" replace />} />  -- Just example of redirect
                <Route path='*' element={<NotFound404 />} />
            </Routes>
            <Footer/>
          </BrowserRouter>
      </div>
    )
  }
}

export default App;
