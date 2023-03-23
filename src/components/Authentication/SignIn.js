import React, { useContext } from "react";
import { Link } from "react-router-dom";
import login from "../../images/login.jpg";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../context/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const SignIn = () => {
  const { login, providerLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();

  // google sign In
  const GoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .then((e) => console.log("error ta hocce : " + e));
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    login(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .then((e) => console.error(e));
  };
  return (
    <div>
      <section>
        <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
          <div class="justify-center mx-auto text-left align-bottom transition-all transform bg-white rounded-lg sm:align-middle sm:max-w-2xl sm:w-full">
            <div class="grid flex-wrap items-center justify-center grid-cols-1 mx-auto shadow-xl lg:grid-cols-2 rounded-xl">
              <div class="w-full px-6 py-3">
                <div>
                  <div class="mt-3 text-left sm:mt-5">
                    <div class="inline-flex items-center w-full">
                      <h3 class="text-lg font-bold text-neutral-600 l eading-6 lg:text-5xl">
                        Sign In
                      </h3>
                    </div>
                    <div class="mt-4 text-base text-gray-500">
                      <p>Login and get our services.</p>
                    </div>
                  </div>
                </div>
                <form onSubmit={handleLogin}>
                  <div class="mt-6 space-y-2">
                    <div>
                      <label for="Email" class="sr-only">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="input input-bordered w-full max-w-xs"
                      />
                    </div>
                    <div>
                      <label for="password" class="sr-only">
                        Password
                      </label>
                      <input
                        name="password"
                        type="password"
                        placeholder="password"
                        className="input input-bordered w-full max-w-xs"
                      />
                    </div>
                    <div class="flex flex-col mt-4 lg:space-y-2">
                      <input
                        type="submit"
                        placeholder="Type here"
                        value="Submit"
                        className="input input-ghost  bg-green-700 text-white w-full max-w-xs"
                      />
                      <div className="flex justify-between">
                        <Link>Don't have an account ?</Link>
                        <Link
                          className="font-bold text-green-600"
                          to={"/register"}
                        >
                          Sign Up
                        </Link>
                      </div>
                    </div>
                  </div>
                </form>

                <div className="divider">Or continue with</div>
                <div className="">
                  <button
                    onClick={GoogleSignIn}
                    class="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-gray-300 mt-3 shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                    <div class="flex items-center justify-center">
                      <span class="ml-4 flex font-bold">
                        Google <FcGoogle className="ml-2 mt-1 text-xl" />
                      </span>
                    </div>
                  </button>
                </div>
              </div>
              <div class="order-first hidden w-full lg:block">
                <img
                  class="object-cover h-full bg-cover rounded-l-lg"
                  src={login}
                  alt="login"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
