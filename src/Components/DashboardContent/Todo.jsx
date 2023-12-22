import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { BsFillCaretRightFill } from "react-icons/bs";
import { LuClipboardEdit } from "react-icons/lu";
import { TiDelete } from "react-icons/ti";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Todo = ({ task, refetch }) => {
  const { title, prioritys, description, deadline, _id } = task;
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  const Deletedtask = (task) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axios.delete(
          `http://localhost:5000/tasks/${task._id}`
        );
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          refetch();
          toast.success(`Task has been deleted`);
        }
      }
    });
  };

  return (
    <div>
      <div className="py-2 w-full">
        <div
          className="bg-gray-200 rounded flex justify-between  p-4 h-full items-center cursor-pointer"
          onClick={toggleAccordion}
        >
          <div className="flex justify-center items-center gap-1 ">
            <BsFillCaretRightFill
              className={`text-lg text-second mr-1 ${
                isOpen ? "transform rotate-90" : ""
              }`}
            />
            <span className=" font-medium">{title}</span>
          </div>
          <div className="flex justify-center items-center gap-2 ">
            <div
              className={`badge ${
                prioritys === "High"
                  ? "badge-error"
                  : prioritys === "Moderate"
                  ? "badge-warning"
                  : "badge-accent"
              } badge-outline`}
            >
              {prioritys}
            </div>{" "}
            <button
              onClick={() => Deletedtask(task)}
              className="cursor-pointer text-second hover:text-red-700 text-3xl "
            >
              <TiDelete />
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="bg-gray-200  pb-3  flex justify-between rounded-t-none rounded">
            <div>
              <div className="text-sm px-6 text-gray-500 ">
                <p>
                  <span className="text-second font-medium">Description:</span>{" "}
                  {description}
                </p>
              </div>
              <div className="text-sm px-6 text-gray-500 ">
                <p>
                  <span className="text-second font-medium">Deadline:</span>{" "}
                  {deadline}
                </p>
              </div>
            </div>
            <div className="text-sm px-6  text-first   text-end">
              <Link to={`/dashboard/updatetask/${_id}`}>
                <button>
                  <LuClipboardEdit className="text-xl hover:text-second " />{" "}
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Todo;
