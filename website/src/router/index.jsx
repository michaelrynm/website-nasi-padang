import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Index from "../pages";
import Menu from "../pages/menu";
import About from "../pages/about";
import Order from "../pages/order";
import Test from "../pages/test";
import Summary from "../pages/summary";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Index />,
    },
    {
      path: "/menu",
      element: <Menu />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/test",
      element: <Test />
    },
    {
      path: "/order",
      element: <Order />
    },
    {
      path: "/order-summary",
      element: <Summary />
    }
  ]);
  return <RouterProvider router={router} />;
}
