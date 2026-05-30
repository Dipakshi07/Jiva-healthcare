import MainLayout from "../layout/MainLayout";
import OrderTable from "../orders/OrderTable";

import "./Orders.css";

function Orders() {
  return (
    <MainLayout>

      <div className="orders-page">

        <h1>Orders</h1>

        <div className="orders-table-wrapper">
          <OrderTable />
        </div>

      </div>

    </MainLayout>
  );
}

export default Orders;