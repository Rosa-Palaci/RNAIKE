import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Carusel from "./components/Carusel";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Carusel />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
