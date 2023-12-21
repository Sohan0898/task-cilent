import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";


const Login = () => {
  const { googleSignIn, signInWithEmail } = useContext(AuthContext);
  const [logError, setLogError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoogleSignIn = () => {
    
    toast.promise(
      googleSignIn(),
      {
        loading: 'Logging in...',
        success: (result) => {
          console.log(result.user);
          navigate(location?.state ? location?.state : "/");
          return "Login Successfully";
        },
        error: (error) => {
          console.error(error);
          setLogError(error.message);
          return "Login failed. Please check your network.";
        },
      }
    );
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
    setLogError("");

    // login user

    toast.promise(
      signInWithEmail(email, password),
      {
        loading: 'Logging in...',
        success: (result) => {
          console.log(result.user);
          e.target.reset();
          navigate(location?.state ? location?.state : "/");
          return "Login Successfully";
        },
        error: (error) => {
          console.error(error);
          setLogError(error.message);
          return "Login failed. Please check your network.";
        },
      }
    );
  };

  return (
    <div>
      <section className="bg-base-100  my-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 max-w-screen-2xl mx-auto">
          <div className="flex items-center justify-center bg-base-100 py-16 lg:py-24">
            <div className=" border rounded-lg py-9 px-6 ">
              <h2 className="text-3xl font-bold leading-tight text-black md:text-4xl">
                Welcome Back To <span className="text-first">Task!</span>
              </h2>
              <p className="mt-2 text-base text-gray-600">
                New on Task?{" "}
                <Link to={"/register"}>
                  <span className="font-medium text-first transition-all duration-200 hover:text-red-700 hover:underline focus:text-red-700">
                    Register
                  </span>
                </Link>
              </p>

              <form onSubmit={handleLogin} className="mt-8">
                <div className="space-y-5">
                  <div>
                    <label className="text-base font-medium text-gray-900">
                      {" "}
                      Email address{" "}
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="email"
                        name="email"
                        required
                        id=""
                        placeholder="noreply@email.com"
                        className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-red-600 focus:bg-white caret-red-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-base font-medium text-gray-900">
                      {" "}
                      Password{" "}
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="password"
                        name="password"
                        required
                        id=""
                        placeholder="••••••••••"
                        className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-red-600 focus:bg-white caret-red-600"
                      />
                    </div>
                  </div>

                  {logError && (
                    <p className="text-red-500 font-semibold pt-2">
                      ⚠️{logError}
                    </p>
                  )}

                  

                  <div>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-first border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-red-700"
                    >
                      Login to account
                    </button>
                  </div>
                </div>
              </form>

              <div className="mt-3 space-y-3">
                <button
                  onClick={handleGoogleSignIn}
                  type="button"
                  className="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
                >
                  <div className="mr-1">
                    <img
                      className="w-9"
                      src="https://i.ibb.co/gr2V3M3/icons8-google-480.png"
                      alt=""
                    />
                  </div>
                  Login with Google
                </button>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex items-center justify-center px-4 py-10 sm:py-16 lg:py-24 bg-white sm:px-6 lg:px-8">
            <div>
              <img
                className="w-full h-[60vh] mx-auto"
                src="https://i.ibb.co/HttDFvv/Untitled-1080-x-1080-px-1.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;