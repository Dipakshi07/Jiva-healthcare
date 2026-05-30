import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Users from "../pages/Users";
import UserDetail from "../pages/UserDetail";
import Orders from "../pages/Orders";
import OrderDetail from "../pages/OrderDetail";
import Payments from "../pages/Payments";
import FamilyMembers from "../pages/FamilyMembers";
import AddUser from "../pages/AddUser";

function AppRoutes() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Dashboard />}
        />

        <Route
          path="/users"
          element={<Users />}
        />

        <Route
          path="/users/:id"
          element={<UserDetail />}
        />

        <Route
          path="/orders"
          element={<Orders />}
        />

        <Route
          path="/orders/:id"
          element={<OrderDetail />}
        />

        <Route
          path="/payments"
          element={<Payments />}
        />

        <Route
          path="/family"
          element={<FamilyMembers />}
        />

      <Route 
         path="/add-user" 
         element={<AddUser />} 
      />

      </Routes>


    </BrowserRouter>

  );
}

export default AppRoutes;