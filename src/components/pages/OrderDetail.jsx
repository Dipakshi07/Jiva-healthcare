// src/pages/OrderDetail.jsx

import React from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import "./OrderDetail.css";

const orders = [
  {
    id: 101,
    medicine: "Paracetamol",
    quantity: 2,
    price: 200,
    status: "Delivered",
    deliveryDate: "28 May 2026",
    paymentMethod: "UPI",
    customer: "Rahul Sharma",
    address: "Lucknow, Uttar Pradesh",
    trackingId: "TRK458796",
  },

  {
    id: 102,
    medicine: "Vitamin C",
    quantity: 1,
    price: 500,
    status: "Pending",
    deliveryDate: "30 May 2026",
    paymentMethod: "Credit Card",
    customer: "Priya Singh",
    address: "Delhi, India",
    trackingId: "TRK963214",
  },
];

function OrderDetail() {
  const { id } = useParams();

  const order = orders.find((item) => item.id === Number(id));

  if (!order) {
    return (
      <MainLayout>
        <h2>Order Not Found</h2>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="order-detail-container">

        <div className="order-header">
          <div>
            <h1>Order Details</h1>
            <p>Track and manage healthcare medicine orders</p>
          </div>

          <button className="download-btn">
            Download Invoice
          </button>
        </div>

        <div className="order-top-cards">

          <div className="detail-card">
            <h4>Order ID</h4>
            <p>#{order.id}</p>
          </div>

          <div className="detail-card">
            <h4>Status</h4>

            <span
              className={
                order.status === "Delivered"
                  ? "status delivered"
                  : "status pending"
              }
            >
              {order.status}
            </span>
          </div>

          <div className="detail-card">
            <h4>Total Price</h4>
            <p>₹{order.price}</p>
          </div>

          <div className="detail-card">
            <h4>Payment</h4>
            <p>{order.paymentMethod}</p>
          </div>

        </div>

        <div className="order-grid">

          <div className="order-info-card">
            <h2>Medicine Information</h2>

            <div className="info-row">
              <span>Medicine Name</span>
              <strong>{order.medicine}</strong>
            </div>

            <div className="info-row">
              <span>Quantity</span>
              <strong>{order.quantity}</strong>
            </div>

            <div className="info-row">
              <span>Tracking ID</span>
              <strong>{order.trackingId}</strong>
            </div>

            <div className="info-row">
              <span>Delivery Date</span>
              <strong>{order.deliveryDate}</strong>
            </div>
          </div>

          <div className="order-info-card">
            <h2>Customer Information</h2>

            <div className="info-row">
              <span>Customer Name</span>
              <strong>{order.customer}</strong>
            </div>

            <div className="info-row">
              <span>Address</span>
              <strong>{order.address}</strong>
            </div>

            <div className="info-row">
              <span>Payment Method</span>
              <strong>{order.paymentMethod}</strong>
            </div>

            <div className="info-row">
              <span>Delivery Status</span>

              <strong
                className={
                  order.status === "Delivered"
                    ? "text-success"
                    : "text-warning"
                }
              >
                {order.status}
              </strong>
            </div>
          </div>

        </div>

        <div className="timeline-card">
          <h2>Delivery Timeline</h2>

          <div className="timeline">

            <div className="timeline-item active">
              <div className="circle"></div>
              <p>Order Confirmed</p>
            </div>

            <div className="timeline-item active">
              <div className="circle"></div>
              <p>Packed</p>
            </div>

            <div className="timeline-item active">
              <div className="circle"></div>
              <p>Out For Delivery</p>
            </div>

            <div className="timeline-item">
              <div className="circle"></div>
              <p>Delivered</p>
            </div>

          </div>
        </div>

      </div>
    </MainLayout>
  );
}

export default OrderDetail;