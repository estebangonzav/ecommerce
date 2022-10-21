import React from "react";
// import { BrowserRouter, Routes, Route} from "react-router-dom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import Dashboard from "./components/admin/Dashboard";
// import Profile from "./components/admin/Profile";
import Login from "./components/frontend/auth/Login";
import Register from "./components/frontend/auth/Register";
import Home from "./components/frontend/Home";
import Page404 from "./components/errors/Page404";
import Page403 from "./components/errors/Page403";
import MasterLayour from "./layouts/admin/MasterLayour";
import axios from "axios";
import AdminPrivateRoute from "./AdminPrivateRoute";

axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.withCredentials = true;
axios.interceptors.request.use(function (config) {
  const token2 = localStorage.getItem("auth_token");
  // console.log(config);
  // console.log(token2);
  config.headers.Authorization = token2 ? `Bearer ${token2}` : "";
  return config;
});

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home></Home>}></Route>
        {/* <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route> */}
                <Route path="/403"  element={<Page403></Page403>}/>
                <Route path="/404"  element={<Page404></Page404>}/>

        <Route path="/login" element={localStorage.getItem('auth_token') ?  <Navigate to="/"/> :  <Login/>} />
        <Route path="/register" element={localStorage.getItem('auth_token') ?  <Navigate to="/"/> :  <Register/>} />
        
        {/* <Route path="/admin/*" element={<MasterLayour />}></Route> */}
        <Route path="/admin/*" element={<AdminPrivateRoute><MasterLayour /></AdminPrivateRoute>}></Route>
        {/* <AdminPrivateRoute path="/admin" name="Admin"></AdminPrivateRoute> */}
        {/* <AdminPrivateRoute></AdminPrivateRoute> */}
      </Routes>

      {/* <Route path="/admin/profile" element={Profile}></Route>
          <Route path="/admin/dashboard" element={Dashboard}></Route> */}
      {/* <Route
            path="/admin"
            name="Admin"
            element={(props) => <MasterLayour {...props} />}
          ></Route> */}
    </div>
  );
}

export default App;
