import { Link, useNavigate } from "react-router-dom";
import Container from "../../Shared/Container/Container";
import { useContext, useState } from "react";

import { updateProfile } from "firebase/auth";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  const { signUpWithEmail } = useContext(AuthContext);

  const [regError, setRegError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const photo = form.get("photo");
    const password = form.get("password");
    console.log(name, photo, email, password);

    if (password.length < 6) {
      setRegError("Password must be six characters or longer!");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegError("Password must contain at least one capital letter!");
      return;
    } else if (!/[!@#$%^&*]/.test(password)) {
      setRegError("Password must contain at least one special character!");
      return;
    }

    setRegError("");
    try {
      const loadingToastId = toast.loading("Registering...");

      // Create user
      const result = await signUpWithEmail(email, password);
      console.log(result.user);

      // Update profile
      await updateProfile(result.user, {
        displayName: name,
        photoURL: photo,
      });
      toast.success("Register Successfully", { id: loadingToastId });
      e.target.reset();
      navigate("/");
    } catch (error) {
      console.error(error);
      setRegError(error.message);

      toast.error("Registration Failed");
    }
  };

  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-16">
      <Container>
        <div className="">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Create free account
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
              Unlock a world of productivity with Task. Register now to
              streamline your tasks and achieve optimal efficiency in every
              project.
            </p>
          </div>

          <div className="relative max-w-md mx-auto mt-8 md:mt-10">
            <div className="overflow-hidden bg-white rounded-md shadow-md">
              <div className="px-4 py-6 sm:px-8 sm:py-7">
                <form onSubmit={handleRegister}>
                  <div className="space-y-5">
                    <div>
                      <label className="text-base font-medium text-gray-900">
                        {" "}
                        Name{" "}
                      </label>
                      <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <svg
                            className="w-5 h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>
                        </div>

                        <input
                          required
                          type="text"
                          name="name"
                          id=""
                          placeholder="Enter your full name"
                          className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-base font-medium text-gray-900">
                        {" "}
                        PhotoURL{" "}
                      </label>
                      <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="18"
                            width="18"
                            fill="currentColor"
                            stroke="currentColor"
                            viewBox="0 0 512 512"
                          >
                            <path d="M448 80c8.8 0 16 7.2 16 16V415.8l-5-6.5-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3L202 340.7l-30.5-42.7C167 291.7 159.8 288 152 288s-15 3.7-19.5 10.1l-80 112L48 416.3l0-.3V96c0-8.8 7.2-16 16-16H448zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
                          </svg>
                        </div>

                        <input
                          required
                          type="text"
                          name="photo"
                          id=""
                          placeholder="Enter your photoURL"
                          className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-base font-medium text-gray-900">
                        {" "}
                        Email address{" "}
                      </label>
                      <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <svg
                            className="w-5 h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                            />
                          </svg>
                        </div>

                        <input
                          required
                          type="email"
                          name="email"
                          id=""
                          placeholder="Enter email to get started"
                          className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-base font-medium text-gray-900">
                        {" "}
                        Password{" "}
                      </label>
                      <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <svg
                            className="w-5 h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                            />
                          </svg>
                        </div>

                        <input
                          type="password"
                          name="password"
                          id=""
                          required
                          placeholder="Enter your password"
                          className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                        />
                      </div>
                    </div>

                    <div>
                      {regError && (
                        <p className="text-red-600 font-semibold">
                          ⚠️{regError}
                        </p>
                      )}
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-first border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                      >
                        Create account
                      </button>
                    </div>

                    <div className="text-center">
                      <p className="text-base text-gray-600">
                        Already have an account?{" "}
                        <Link to={"/login"}>
                          <span
                            href="#"
                            title=""
                            className="font-medium text-first transition-all duration-200 hover:text-blue-700 hover:underline"
                          >
                            Login here
                          </span>
                        </Link>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Register;
