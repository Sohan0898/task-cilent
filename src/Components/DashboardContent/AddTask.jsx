import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const AddTask = () => {
  const { register, handleSubmit, setValue, watch, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log(data);
      const response = await axios.post("http://localhost:5000/tasks", data);
      console.log(response);
      toast.success("Task added successfully!");
      reset();
    } catch (error) {
      console.error("Error adding task:", error);
      toast.error("Error adding task. Please try again.");
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
            Add Your Task :{" "}
          </p>
        </div>
        <div className="w-full py-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="rounded-lg bg-gray-200 p-8 shadow-lg lg:col-span-5 lg:p-12">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4 lg:space-y-8"
              >
                <div>
                  <label className="sr-only" htmlFor="title">
                    Title
                  </label>
                  <input
                    {...register("title", { required: true })}
                    className="w-full outline-second rounded-lg border-gray-200 p-5 text-sm"
                    placeholder="Enter Task Title"
                    type="text"
                    id="title"
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="deadline">
                    DeadLine
                  </label>
                  <input
                    {...register("deadline", { required: true })}
                    className="w-full outline-second placeholder-gray-300 rounded-lg border-gray-200 p-5 text-sm"
                    type="date"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                  <div>
                    <input
                      {...register("priority", { required: true })}
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
                      className={`block w-full rounded-lg bg-white border-2 border-second p-5 text-gray-700  hover:bg-second ${
                        priority === "Low"
                          ? "border-second bg-second text-white"
                          : ""
                      }`}
                      tabIndex="0"
                    >
                      <span className="text-sm"> Low </span>
                    </label>
                  </div>

                  <div>
                    <input
                      {...register("priority", { required: true })}
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
                      className={`block w-full rounded-lg bg-white border-2 border-second p-5 text-gray-700  hover:bg-second ${
                        priority === "Moderate"
                          ? "border-second bg-second text-white"
                          : ""
                      }`}
                      tabIndex="0"
                    >
                      <span className="text-sm"> Moderate </span>
                    </label>
                  </div>

                  <div>
                    <input
                      {...register("priority", { required: true })}
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
                      className={`block w-full rounded-lg bg-white border-2 border-second p-5 text-gray-700  hover:bg-second ${
                        priority === "High"
                          ? "border-second bg-second text-white"
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
                    {...register("description", { required: true })}
                    className="w-full outline-second rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Task Description..."
                    rows="6"
                    id="description"
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-second hover:bg-first px-5 py-5 font-medium text-white"
                  >
                    Add New Task
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

export default AddTask;
