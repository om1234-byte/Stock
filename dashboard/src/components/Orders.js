




import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Orders.css"; 

const Orders = () => {
  const [activeTab, setActiveTab] = useState("pending");
  const [allOrder, setAllOrder] = useState([])


    const CompleteFetch = async () =>{
     
      await axios.get("https://stock-epyn.onrender.com/allOrders")
      .then((res) => {
        console.log(res.data);
        console.log(res.data);
        setAllOrder(res.data);
      })
      .catch((err) => console.error("Error fetching Orders:", err)); 

      setActiveTab("completed")
    }
  
  // Sample order data
  const orderHistory = {
    
    pending: [
      {
        id: "ORD12345",
        mode: "BUY",
        name: "RELIANCE",
        qty: 5,
        price: 2456.75,
        status: "Pending",
        
      }
    ],
   
    cancelled: [
      {
        id: "ORD12342",
        mode: "BUY",
        name: "HDFCBANK",
        qty: 2,
        price: 1520.50,
        status: "Cancelled",
       
      }
    ]
  };
  orderHistory['completed'] = allOrder;

  const renderOrderCard = (order) => (
    <div className="order-card" key={order.id}>
      <div className="order-header">
        <span className={`order-type ${order.mode.toLowerCase() }`}>
          {order.mode}
        </span>
        <span className="order-symbol">{order.name}</span>
        <span className="order-status">{order.status || "completed"}</span>
      </div>
      <div className="order-details">
        <div>
          <span>Quantity:</span>
          <strong>{order.qty}</strong>
        </div>
        <div>
          <span>Price:</span>
          <strong>₹{order.price.toFixed(2)}</strong>
        </div>
        <div>
          <span>Total:</span>
          <strong>₹{(order.qty * order.price).toFixed(2)}</strong>
        </div>
      </div>
      <div className="order-footer">
        <span className="order-id">#{order.id}</span>
        
        {order.status === "Pending" && (
          <button className="cancel-btn">Cancel Order</button>
        )}
      </div>
    </div>
  );

  return (
    <div className="orders-container">
      <div className="orders-header">
        <h1>Orders</h1>
        <div className="order-tabs">
       
          <button
            className={`tab ${activeTab === "pending" ? "active" : ""}`}
            onClick={() => setActiveTab("pending")}
          >
            Pending
          </button>
          <button
            className={`tab ${activeTab === "completed" ? "active" : ""}`}
            onClick={CompleteFetch}
          >
            Completed
          </button>
          <button
            className={`tab ${activeTab === "cancelled" ? "active" : ""}`}
            onClick={() => setActiveTab("cancelled")}
          >
            Cancelled
          </button>
        </div>
      </div>

      <div className="orders-content">
        {orderHistory[activeTab].length > 0 ? (
          <div className="orders-list">
            {orderHistory[activeTab].map(renderOrderCard)}
          </div>
        ) : (
          <div className="no-orders">
            <div className="empty-state">
              <img
                src="/images/no-orders.svg"
                alt="No orders"
                className="empty-image"
              />
              <h3>No {activeTab} orders found</h3>
              <p>
                {activeTab === "today"
                  ? "You haven't placed any orders today"
                  : `You don't have any ${activeTab} orders`}
              </p>
              <Link to="/" className="btn primary-btn">
                Start Trading
              </Link>
            </div>
          </div>
        )}
      </div>

      <div className="quick-actions">
        <Link to="/buy" className="action-btn buy-btn">
          <span>+</span> New Buy Order
        </Link>
        <Link to="/sell" className="action-btn sell-btn">
          <span>-</span> New Sell Order
        </Link>
      </div>
    </div>
  );
};

export default Orders;

