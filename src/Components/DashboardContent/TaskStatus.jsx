import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Todo from "./Todo";
import Ongoing from "./Ongoing";
import Completed from "./Completed";

const TaskStatus = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="mt-2 px-2 lg:mt-4 lg:px-4">
      <div>
        <h1 className="text-xl md:text-2xl lg:text-4xl font-medium ">
          Welcome to TaskPedia, {user?.displayName}.
        </h1>
      </div>
      <div className="mt-6 px-6 py-4 rounded">
        <div className=" grid grid-cols-1 lg:grid-cols-3 justify-center gap-10 ">
          <div className=" p-6 rounded shadow-md">
            <p className="text-2xl uppercase mb-4 text-second font-bold">
              To-Do List :
            </p>
            <Todo></Todo>
          </div>
          <div className=" p-6 rounded shadow-md">
            <p className="text-2xl uppercase mb-4 text-red-500 font-bold">
              Ongoing :
            </p>
            <Ongoing></Ongoing>
          </div>
          <div className=" p-6 rounded shadow-md">
            <p className="text-2xl uppercase mb-4 text-green-500 font-bold">
              Completed :
            </p>
            <Completed></Completed>
          </div>
        </div>
      </div>
      <div> </div>
    </div>
  );
};

export default TaskStatus;
