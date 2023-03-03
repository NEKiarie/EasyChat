import { createBrowserRouter } from "react-router-dom";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

export const ROOT = "/";
export const LOGIN = "/login";
export const REGISTER = "/register";

export const router = createBrowserRouter([
  {
    path: ROOT,
    element: "public root",
  },
  {
    path: LOGIN,
    element:<Login />,
  },
  {
    path: REGISTER,
    element: <Register />
  },
]);
