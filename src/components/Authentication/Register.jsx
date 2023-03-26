import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import register from "../../images/register.jpg";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [createdUserEmail, setCreatedUserEmail] = useState("");

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const name = form.name.value;
    const role = form.identity.value;
    const password = form.password.value;
    // console.log(form, password, role, name, email);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        const userInfo = {
          displayName: name,
        };

        updateUserProfile(userInfo)
          .then(() => {
            saveUser(name, email, role);
          })
          .then((e) => console.log(e))
          .catch((error) => console.log(error));
      })
      .catch((err) => console.log(err));
  };

  const saveUser = (name, email, role) => {
    const user = { name, email, role };
    fetch(`http://localhost:5000/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => setCreatedUserEmail(email));
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
                        <h3 class="text-lg font-bold text-neutral-600 leading-6 lg:text-5xl">
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
                        <select
                          name="identity"
                          class="select select-bordered w-full max-w-xs"
                        >
                          <option value={"buyer"}>Buyer</option>
                          <option value={"seller"}>Seller</option>
                        </select>
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
                        <input
                          type="submit"
                          placeholder="Type here"
                          value="Submit"
                          className="input input-ghost  bg-green-700 text-white w-full max-w-xs"
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
