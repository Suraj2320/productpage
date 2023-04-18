import React from "react";
import {Routes, Route} from "react-router-dom"
import { Admin } from "../Pages/Admin";
import Cart from "../Pages/Cart";
import OrderManage from "../Pages/OrderManage";
import Productmanage from "../Pages/Productmanage";
import User from "../Pages/users";

import Details from "../Pages/Details";



const AllRoutes = () => {

  return (
    <Routes>
      
      <Route path="/user" element={<User />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/admin" element={<Admin/>}></Route>      
      <Route path="/admin/add" element={<Productmanage/>}></Route>
      <Route path="/admin/order" element={<OrderManage/>}></Route>
      <Route path="/details/:id"  element={<Details/>}></Route>

       
    </Routes>
  )
};

export default AllRoutes;
