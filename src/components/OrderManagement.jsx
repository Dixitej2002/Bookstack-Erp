
import React, { useState } from 'react';
import Header from './Header';
import './OrderManagement.css';

const OrdersManagement = () => {
  const [orders, setOrders] = useState([
    { id: 1, bookId:1,customerName: 'Prince Kumar', orderDate: '2024-03-08', status: 'Pending' },
    { id: 2, bookId:2,customerName: 'John Halwai', orderDate: '2024-03-07', status: 'Shipped' },
    { id: 3, bookId:4,customerName: 'Sandeep Nayak', orderDate: '2024-03-10', status: 'Shipped' },
    { id: 4, bookId:4,customerName: 'Kristin Kelly', orderDate: '2024-03-05', status: 'Pending' },
    { id: 5, bookId:1,customerName: 'Smita Devi', orderDate: '2024-03-07', status: 'Delivered' },
    { id: 6, bookId:6,customerName: 'Krishnna Iyer', orderDate: '2024-03-07', status: 'Shipped' },
    
  ]);

  const deleteOrder = (id) => {
    const updatedOrders = orders.filter(order => order.id !== id);
    setOrders(updatedOrders);
  };

  return (
    <>
    <Header></Header>
    <div className="orders-container">
      <h2>Orders</h2>
      <div className="order-table-container">
        <table className="order-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Book ID</th>
              <th>Customer Name</th>
              <th>Order Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.bookId}</td>
                <td>{order.customerName}</td>
                <td>{order.orderDate}</td>
                <td>{order.status}</td>
                <td>
                  <button className='delete-btn' onClick={() => deleteOrder(order.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
      </div>
    </div>
    </>
  );
};

export default OrdersManagement;
