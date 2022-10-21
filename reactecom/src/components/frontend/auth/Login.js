import axios from "axios";
import React from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import Navbar from "../../../layouts/frontend/Navbar";

const Login = () => {
  const navigate = useNavigate();
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
    error_list: [],
  });

  const handleInput = (e) => {
    e.persist();
    setLoginInput({ ...loginInput, [e.target.name]: e.target.value });
  };

  const loginSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: loginInput.email,
      password: loginInput.password,
    };
    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios.post("api/login", data).then((resp) => {
        console.log(response);
        console.log(resp);

        if (resp.data.status === 200) {
          localStorage.setItem("auth_token", resp.data.token);
          localStorage.setItem("auth_name", resp.data.username);
          swal("Success", resp.data.message, "success");
          if(resp.data.role === 'admin'){
            navigate("/admin/dashboard");

          }else{
            navigate("/");

          }
        } else if (resp.data.status === 401) {
          swal("Warning", resp.data.message, "warning");
        } else {
          console.log("avca3");
          setLoginInput({
            ...loginInput,
            error_list: resp.data.validation_errors,
          });
        }
      });
    });
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h4>Login</h4>
              </div>
              <div className="card-body">
                <form onSubmit={loginSubmit}>
                  <div className="form-group mb-3">
                    <label>Email</label>
                    <input
                      type=""
                      name="email"
                      value={loginInput.email}
                      onChange={handleInput}
                      className="form-control"
                    ></input>
                    <span>{loginInput.error_list.email}</span>
                  </div>
                  <div className="form-group mb-3">
                    <label>Password</label>
                    <input
                      type=""
                      name="password"
                      value={loginInput.password}
                      onChange={handleInput}
                      className="form-control"
                    ></input>
                    <span>{loginInput.error_list.password}</span>
                  </div>

                  <div className="form-group mb-3">
                    <button
                      type="submit"
                      name="confirm_btn"
                      className="btn btn-success"
                    >
                      Ingresar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
