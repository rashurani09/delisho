import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPage from "./pages/admin/AdminPage";
import AdminOrderPage from "./pages/admin/admin-order-page/AdminOrderPage";
import AdminSeatingsPage from "./pages/admin/admin-seating-page/AdminSeatingsPage";
import './App.css'
import AdminMenuPage from "./pages/admin/admin-menu-page/AdminMenuPage";
import MultiStepRouter from "./pages/user/user-table-reservation/UserTableReservation";
import TableReservation from "./pages/table-reservation/TableReservation";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminPage />}>
        <Route path=""  element = {<AdminMenuPage/>}/>
          <Route path="/orders"  element = {<AdminOrderPage/>}/>
          <Route path="/seatings"  element = {<AdminSeatingsPage/>}/>
          {/* <Route path="/user"  element = {<MultiStepRouter/>}/> */}
          <Route path="/table" element = {<TableReservation/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);