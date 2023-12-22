import { useForm } from "react-hook-form";

import toast from "react-hot-toast";

import axios from "axios";
import { useLoaderData } from "react-router-dom";

const UpdateTask = () => {
  const { title, description, prioritys, deadline, _id } = useLoaderData();

  const { register, handleSubmit, setValue, watch, reset } = useForm();

  const updatedTask = async (data) => {
    try {
      const taskInfo = {
        title: data.title,
        prioritys: data.priority,
        description: data.description,
        deadline: data.deadline,
      };

      console.log("taskinfo", taskInfo);
      const response = await axios.patch(
        `http://localhost:5000/tasks/${_id}`,
        taskInfo
      );
      console.log(response.data);
      if (response.data.modifiedCount > 0) {
        toast.success("Task updated successfully!");
        reset();
      }
    } catch (error) {
      console.error("Error updating task:", error);
      toast.error("Error updating task. Please try again.");
    }
  };

  const handlePriorityChange = (value) => {
    setValue("priority", value);
  };

  const priority = watch("priority");

  return (
    <div className="mt-2 px-2 lg:mt-4 lg:px-4">
      <section className="">
        <div>
          <p className="text-xl md:text-2xl lg:text-4xl font-medium">
            Update {title} :{" "}
          </p>
        </div>
        <div className="w-full py-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="rounded-lg bg-gray-200 p-8 shadow-lg lg:col-span-5 lg:p-12">
              <form
                onSubmit={handleSubmit(updatedTask)}
                className="space-y-4 lg:space-y-8"
              >
                <div>
                  <label className="sr-only" htmlFor="title">
                    Title
                  </label>
                  <input
                    {...register("title", { required: false })}
                    className="w-full outline-first rounded-lg border-gray-200 p-5 text-sm"
                    placeholder="Enter Task Title"
                    type="text"
                    id="title"
                    defaultValue={title}
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="deadline">
                    DeadLine
                  </label>
                  <input
                    {...register("deadline", { required: false })}
                    className="w-full outline-first placeholder-gray-300 rounded-lg border-gray-200 p-5 text-sm"
                    type="date"
                    defaultValue={deadline}
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="priority">
                    Priority
                  </label>
                  <input
                    className="w-full outline-first placeholder-gray-300 rounded-lg border-gray-200 p-5 text-sm"
                    type="text"
                    defaultValue={prioritys}
                    readOnly
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                  <div>
                    <input
                      {...register("priority", { required: false })}
                      className="peer sr-only"
                      id="option1"
                      type="radio"
                      tabIndex="-1"
                      name="priority"
                      value="Low"
                      onChange={() => handlePriorityChange("Low")}
                    />

                    <label
                      htmlFor="option1"
                      className={`block w-full rounded-lg bg-white border-2 border-first p-5 text-gray-700  hover:bg-first ${
                        priority === "Low"
                          ? "border-first bg-second text-white"
                          : ""
                      }`}
                      tabIndex="0"
                    >
                      <span className="text-sm"> Low </span>
                    </label>
                  </div>

                  <div>
                    <input
                      {...register("priority", { required: false })}
                      className="peer sr-only"
                      id="option2"
                      type="radio"
                      tabIndex="-1"
                      name="priority"
                      value="Moderate"
                      onChange={() => handlePriorityChange("Moderate")}
                    />

                    <label
                      htmlFor="option2"
                      className={`block w-full rounded-lg bg-white border-2 border-first p-5 text-gray-700  hover:bg-first ${
                        priority === "Moderate"
                          ? "border-first bg-second text-white"
                          : ""
                      }`}
                      tabIndex="0"
                    >
                      <span className="text-sm"> Moderate </span>
                    </label>
                  </div>

                  <div>
                    <input
                      {...register("priority", { required: false })}
                      className="peer sr-only"
                      id="option3"
                      type="radio"
                      tabIndex="-1"
                      name="priority"
                      value="High"
                      onChange={() => handlePriorityChange("High")}
                    />

                    <label
                      htmlFor="option3"
                      className={`block w-full rounded-lg bg-white border-2 border-first p-5 text-gray-700  hover:bg-first ${
                        priority === "High"
                          ? "border-first bg-second text-white"
                          : ""
                      }`}
                      tabIndex="0"
                    >
                      <span className="text-sm"> High </span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="sr-only" htmlFor="description">
                    Description
                  </label>

                  <textarea
                    {...register("description", { required: false })}
                    className="w-full outline-first rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Task Description..."
                    rows="6"
                    id="description"
                    defaultValue={description}
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-first hover:bg-second px-5 py-5 font-medium text-white"
                  >
                    Update Task
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UpdateTask;
