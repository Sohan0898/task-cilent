import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout/MainLayout";
import Home from "../../Pages/Home/Home";
import Register from "../../Pages/Register/Register";
import Login from "../../Pages/Login/Login";
import Dashboard from "../../Layout/Dashboard/Dashboard";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import TaskStatus from "../../Components/DashboardContent/TaskStatus";
import AddTask from "../../Components/DashboardContent/AddTask";
import UpdateTask from "../../Components/DashboardContent/UpdateTask";
import ErrorPage from "../../Pages/Error/ErrorPage";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
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
        element: (
          <PrivateRoute>
            <TaskStatus></TaskStatus>
          </PrivateRoute>
        ),
      },
      {
        path: "addtask",
        element: (
          <PrivateRoute>
            <AddTask></AddTask>
          </PrivateRoute>
        ),
      },
      {
        path: "updatetask/:id",
        element: (
          <PrivateRoute>
            <UpdateTask></UpdateTask>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/tasks/${params.id}`),
      },
    ],
  },
]);

export default Routes;
