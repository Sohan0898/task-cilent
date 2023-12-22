import Todo from "./Todo";
import Ongoing from "./Ongoing";
import Completed from "./Completed";
import useAuth from "../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const TaskStatus = () => {
  const { user, loading } = useAuth();

  const { data: items = [], refetch } = useQuery({
    queryKey: ["contests", user?.email],
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:5000/tasks?email=${user?.email}`
      );
      console.log(res.data);
      return res.data;
    },
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center w-2/5 mx-auto h-[100vh]">
        <p>wait........</p>
      </div>
    );
  }

  return (
    <div className="mt-2 px-2 lg:mt-4 lg:px-4">
      <div>
        <h1 className="text-xl md:text-2xl lg:text-4xl font-medium ">
          Welcome to TaskPedia, {user?.displayName}.
        </h1>
      </div>
      <div className="mt-6 px-6 py-4 rounded">
        <div className=" grid grid-cols-1 lg:grid-cols-3 justify-center gap-10 ">
          <div className=" p-6 rounded bg-second/10 shadow-md">
            <p className="text-2xl uppercase mb-4 text-second font-bold">
              To-Do List : {items?.length}
            </p>
            {items?.map((task) => (
              <Todo key={task._id} task={task} refetch={refetch}></Todo>
            ))}
          </div>
          <div className=" p-6 rounded bg-red-100 shadow-md">
            <p className="text-2xl uppercase mb-4 text-red-500 font-bold">
              Ongoing :
            </p>
            <Ongoing></Ongoing>
          </div>
          <div className=" p-6 rounded bg-green-100 shadow-md">
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
