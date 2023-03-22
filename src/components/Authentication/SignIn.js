import React from "react";
import { Link } from "react-router-dom";
import login from "../../images/login.jpg";

const SignIn = () => {
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

                <div class="mt-6 space-y-2">
                  <div>
                    <label for="Email" class="sr-only">
                      Email
                    </label>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-full max-w-xs"
                    />
                  </div>
                  <div>
                    <label for="password" class="sr-only">
                      Password
                    </label>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-full max-w-xs"
                    />
                  </div>
                  <div class="flex flex-col mt-4 lg:space-y-2">
                    <button
                      type="button"
                      class="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Sign In
                    </button>
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
                  <div class="relative flex justify-center text-sm">
                    <span class="px-2 bg-white text-neutral-600">
                      {" "}
                      Or continue with{" "}
                    </span>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    class="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                    <div class="flex items-center justify-center">
                      {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        class="w-6 h-6"
                        viewBox="0 0 48 48"
                      >
                        <defs>
                          <path
                            id="a"
                            d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                          ></path>
                        </defs>
                        <clipPath id="b">
                          <use xlink:href="#a" overflow="visible"></use>
                        </clipPath>
                        <path
                          clip-path="url(#b)"
                          fill="#FBBC05"
                          d="M0 37V11l17 13z"
                        ></path>
                        <path
                          clip-path="url(#b)"
                          fill="#EA4335"
                          d="M0 11l17 13 7-6.1L48 14V0H0z"
                        ></path>
                        <path
                          clip-path="url(#b)"
                          fill="#34A853"
                          d="M0 37l30-23 7.9 1L48 0v48H0z"
                        ></path>
                        <path
                          clip-path="url(#b)"
                          fill="#4285F4"
                          d="M48 48L17 24l-4-3 35-10z"
                        ></path>
                      </svg> */}
                      <span class="ml-4">Google</span>
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
