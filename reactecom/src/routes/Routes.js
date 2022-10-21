import Dashboard from "../components/admin/Dashboard";
import Profile from "../components/admin/Profile";
import Category from "../components/admin/Category";
import { Route } from "react-router-dom";

const rutas = [
  { path: "/admin", exact: true, name: "Admin" },
  {
    path: "dashboard",
    exact: true,
    name: "Dashboard",
    element: <Dashboard/>,
  },
  { path: "profile", exact: true, name: "Profile", element: <Profile/> },
  { path: "category", exact: true, name: "Profile", element: <Category/> },
];
// console.log(rutas);

// rutas.map((route,index) => {
  
//   console.log(route.element);
// })
// rutas.map((route, index) => {
//   console.log(
//     <Route
//       key={index}
//       path={route.path}
//       exact={route.exact}
//       name={route.name}
//       element={<route.element/>}
//     ></Route>
//   );
// });

export default rutas;
