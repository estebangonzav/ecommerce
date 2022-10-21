import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";

const AdminPrivateRoute = ({ children }) => {
  const location = useLocation();
  // const token = localStorage.getItem("auth_token");
  const navigate = useNavigate();
  const [Authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  //CHECK SI ESTA LOGGEADO
  useEffect(() => {
    axios.get("/api/checkinAuthenticated").then((resp) => {
      if (resp.status === 200) {
        setAuthenticated(true);
      }
      setLoading(false);
    });

    return () => {
      setAuthenticated(false);
    };
  }, []);

  // INTERCEPTOR PARA RETORNAR A VISTA PRINCIPAL NI ESTA LOGEADO E INTENTA ACCEDER A ALGUNA URL

  axios.interceptors.response.use(
    undefined,
    function axiosRetryInterceptor(err) {
      // console.log(err.response.status);
      if (err.response.status === 401) {
        swal("Unauthorized", err.response.data.message, "warning");
        navigate("/");
      }
      return Promise.reject(err);
    }
  );

//VERIFICACION ACCESO DENEGADO
  axios.interceptors.response.use(function (response) {

      return response;
    }, function(error){
      if(error.response.status === 403){ //DENEGADO
        swal("Forbedden", error.response.data.message, "warning");

        navigate("/403");
      }else if(error.response.status === 404){ //PAGINA NO ECNONTRADA
        swal("ERROR 404", "URL NO ENCONTRADA", "warning");

        navigate("/404");
      }

      return Promise.reject(error);

    }
  );

  //AGREGA CARGANDO
  if (loading) {
    return <h1> Cargando....</h1>;
  }

  //REDIRECCION SI EXISTE TOKEN DE AUTENTICACIÓN
  if (!Authenticated) {
    return <Navigate to="/login" state={{ from: location }}></Navigate>;
  }

  return children;
};

export default AdminPrivateRoute;
