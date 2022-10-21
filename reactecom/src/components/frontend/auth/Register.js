import React, { useState } from "react";
import Navbar from "../../../layouts/frontend/Navbar";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const Register = () => {

  const navigate = useNavigate();

  const [registerInput, setRegisterInput] = useState({
    name: "",
    email: "",
    password: "",
    error_list: [],
  });

  const handleInput = (e) => {
    e.persist();
    setRegisterInput({ ...registerInput, [e.target.name]: e.target.value });
  };

  const registerSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: registerInput.name,
      email: registerInput.email,
      password: registerInput.password,
    };
    // axios.post()
    // axios
    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios.post("/api/register", data).then((resp) => {
        if (resp.data.status === 200) {

          localStorage.setItem('auth_token',resp.data.token);
          localStorage.setItem('auth_name',resp.data.username);
          swal('Success', resp.data.message, "success");
          navigate('/');
        } else {
          setRegisterInput({
            ...registerInput,
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
                <h4>Register</h4>
              </div>
              <div className="card-body">
                <form onSubmit={registerSubmit}>
                  <div className="form-group mb-3">
                    <label>Nombre</label>
                    <input
                      type=""
                      name="name"
                      onChange={handleInput}
                      value={registerInput.name}
                      className="form-control"
                    ></input>
                    <span>{registerInput.error_list.name}</span>
                  </div>
                  <div className="form-group mb-3">
                    <label>Email</label>
                    <input
                      type=""
                      name="email"
                      onChange={handleInput}
                      value={registerInput.email}
                      className="form-control"
                    ></input>
                    <span>{registerInput.error_list.email}</span>
                  </div>
                  <div className="form-group mb-3">
                    <label>Password</label>
                    <input
                      type=""
                      name="password"
                      onChange={handleInput}
                      value={registerInput.password}
                      className="form-control"
                    ></input>
                    <span>{registerInput.error_list.password}</span>
                  </div>
                  {/* <div className="form-group mb-3">
                                <label>Confirmar Password</label>
                                <input type="" name="confirm_password" onChange={handleInput} value={registerInput.name} className="form-control" ></input>
                            </div> */}
                  <div className="form-group mb-3">
                    <button
                      type="submit"
                      name="confirm_btn"
                      className="btn btn-success"
                    >
                      Registrar
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

export default Register;
