import Dashboard from "../components/admin/Dashboard";
import Profile from "../components/admin/Profile";
<<<<<<< Updated upstream
import Category from "../components/admin/Category";
=======
import Category from "../components/admin/category/Category";
import Category from "../components/admin/category/ViewCategory";
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
  { path: "category", exact: true, name: "Profile", element: <Category/> },
=======
  { path: "category", exact: true, name: "Category", element: <Category/> },
  { path: "view-category", exact: true, name: "ViewCategory", element: <ViewCategory/> },
>>>>>>> Stashed changes
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
