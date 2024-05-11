import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TableReservation from "./pages/table-reservation/TableReservation";
import React from 'react';
import MenuWrapper from './pages/Menu page/MenuWrapper';
import HomePage from './pages/Homepage & LogIn/HomePage';
import AdminPage from './pages/admin/AdminPage';
import AdminMenuPage from './pages/admin/admin-menu-page/AdminMenuPage';
import AdminOrderPage from './pages/admin/admin-order-page/AdminOrderPage';
import AdminSeatingsPage from './pages/admin/admin-seating-page/AdminSeatingsPage';
import LanguageSelector from "./pages/admin/LanguageSelector";
// import AuthWrapper from "./structure/AuthWrapper"

export default function App() {
  console.log("Apppp");   
  return (
    <>
    {/* <AuthWrapper/> */}
    {/* <LanguageSelector/> */}
    <BrowserRouter>
      <Routes>
      
     <Route exact path="/" element={<HomePage />} /> 
     <Route path="/menu" element={<MenuWrapper/>} />
        <Route path="/tableReservation" element={<TableReservation/>}/>
        <Route path="/admin/*" element={<AdminPage />}>
            <Route  index element={<AdminMenuPage />} />
            <Route path="orders" element={<AdminOrderPage />} />
            <Route path="seatings" element={<AdminSeatingsPage />} />
          </Route>
  <Route/>

     
      </Routes>
    </BrowserRouter>
    </>

  );
}
