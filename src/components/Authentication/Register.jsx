import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import register from "../../images/register.jpg";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const name = form.name.value;
    const password = form.password.value;
    console.log(form, password, name, email);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
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
                          Sign Up
                        </h3>
                      </div>
                      <div class="mt-4 text-base text-gray-500">
                        <p>Register and get our services.</p>
                      </div>
                    </div>
                  </div>
                  <form onSubmit={handleRegister} className="">
                    <div class="mt-6 space-y-2">
                      <div>
                        <label class="sr-only">Name</label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Name"
                          className="input input-bordered w-full max-w-xs"
                        />
                      </div>
                      <div>
                        <label class="sr-only">Email</label>
                        <input
                          type="email"
                          name="email"
                          placeholder="email"
                          className="input input-bordered w-full max-w-xs"
                        />
                      </div>
                      <div>
                        <label class="sr-only">Password</label>
                        <input
                          type="password"
                          name="password"
                          placeholder="password"
                          className="input input-bordered w-full max-w-xs"
                        />
                      </div>
                      <div class="flex flex-col mt-4 lg:space-y-2">
                        {/* <button
                          type="submit"
                          class="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          Sign In
                        </button> */}
                        <input
                          type="submit"
                          placeholder="Type here"
                          value="submit"
                          className="input input-ghost w-full max-w-xs"
                        />
                        <div className="flex justify-between">
                          <Link>Already have an account ?</Link>
                          <Link
                            className="font-bold text-green-600"
                            to={"/login"}
                          >
                            Sign in
                          </Link>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div class="order-first hidden w-full lg:block">
                  <img
                    class="object-cover h-full bg-cover rounded-l-lg"
                    src={register}
                    alt="login"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Register;
