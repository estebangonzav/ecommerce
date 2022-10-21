import React from "react";

import "../../assets/admin/css/styles.css";
import "../../assets/admin/js/scripts.js";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

// import rutas from "../../routes/Routes";
import {Routes, Route, Navigate } from "react-router-dom";
import Profile from "../../components/admin/Profile";
import Dashboard from "../../components/admin/Dashboard";

 import routes from '../../routes/Routes'

const MasterLayour = () => {
  // console.log(rutas);
  // console.log("aaaa");
  return (
    <div className="sb-nav-fixed">
      <Navbar></Navbar>
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <Sidebar></Sidebar>
        </div>
        <div id="layoutSidenav_content">
          <main>
            {/* ejemplo */}
            <Routes>

              {routes.map((route, idx)=> {
                return ( 
                  route.element && (
                    <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    element= { route.element}
                    />
                  )
                )
              })}

              {/* <Route></Route> */}
              {/* <Route path="profile" element={<Profile />}></Route>
              <Route path="dashboard" element={<Dashboard />}></Route> */}
            </Routes>
            {/* <Navigate from="admin" to="/admin/dashboard"></Navigate> */}
            {/* <Navigate from="admin" to="/admin/dashboard"></Navigate> */}
          </main>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default MasterLayour;
