import orders from "../data/orders";

function OrderTable() {
  return (
    <table>

      <thead>
        <tr>
          <th>Order ID</th>
          <th>Date</th>
          <th>Amount</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>

        {orders.map((order) => (
          <tr key={order.id}>

            <td>{order.id}</td>
            <td>{order.date}</td>
            <td>{order.amount}</td>
            <td>{order.status}</td>

          </tr>
        ))}

      </tbody>

    </table>
  );
}

export default OrderTable;