import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout/MainLayout";
import Home from "../../Pages/Home/Home";
import Register from "../../Pages/Register/Register";
import Login from "../../Pages/Login/Login";
import Dashboard from "../../Layout/Dashboard/Dashboard";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import TaskStatus from "../../Components/DashboardContent/TaskStatus";
import AddTask from "../../Components/DashboardContent/AddTask";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    //   errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },

  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "taskstatus",
        element: <TaskStatus></TaskStatus>,
      },
      {
        path: "addtask",
        element: <AddTask></AddTask>,
      },
    ],
  },
]);

export default Routes;
