import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import SignIn from "../pages/signin/SignIn";
import Products from "../pages/products/Products";
import OrderDetails from "../pages/details/OrderDetails";
import PrivateRoute from "../components/privateRoute/PrivateRoute";
import SignUp from "../pages/signup/SignUp";


const router = createBrowserRouter([
  {
    path: "/",
    element: <SignUp />
  },
  {
    path: "/signin",
    element: <SignIn />
  },
  {
    path: "/home",
    element: <Main />,
    children: [
      {
        path: "/home/products",
        element: (
          <PrivateRoute>
            <Products />
          </PrivateRoute>
        )
      },
      {
        path: "/home/order",
        element: (
          <PrivateRoute>
            <OrderDetails />
          </PrivateRoute>
        )
      }
    ]
  }

]);

export default router;