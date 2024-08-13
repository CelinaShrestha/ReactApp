import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Protected from "./protected";
import { isAuthenticated } from "./helper";
import Login from "../pages/Login";
import Home from "../pages/Home/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route element={<Protected />}>
        <Route index element={<Home />} />
        {/* All other routes that you want to protect will go inside here */}
      </Route>
      <Route
        path="login"
        element={<Login />}
        loader={async () => await isAuthenticated()}
      />
      <Route path="*" element={<h1>Page not found</h1>} />
    </Route>
  )
);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
