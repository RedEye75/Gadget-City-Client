import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import register from "../../images/register.jpg";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [url, setUrl] = useState(null);
  // console.log(url);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const name = form.name.value;
    const role = form.identity.value;
    const password = form.password.value;
    const photo = form.photo.files[0];
    // console.log(form, password, role, name, email);

    //  imgbbb hosting
    const formData = new FormData();
    formData.append("image", photo);

    const hostKey = process.env.REACT_APP_imgbb_key;

    const url = `https://api.imgbb.com/1/upload?&key=${hostKey}`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        console.log(imgData.data.display_url);

        if (imgData.success) {
          createUser(email, password)
            .then((result) => {
              const user = result.user;
              // console.log(user);
              const photoURL = imgData.data.display_url;

              updateProfile(name, photoURL);
              if (user?.uid) {
                const addedUser = {
                  name,
                  email,
                  img: imgData.data.display_url,
                  role,
                };
                // console.log(addedUser);
                fetch(`https://gadget-city-server.vercel.app/users`, {
                  method: "POST",
                  headers: {
                    "content-type": "application/json",
                  },
                  body: JSON.stringify(addedUser),
                })
                  .then((res) => res.json())
                  .then((data) => console.log(data));
              }
            })
            .catch((err) => console.log(err));
        }
      });
  };

  const updateProfile = (name, photoURL) => {
    updateUserProfile(name, photoURL)
      .then(() => {
        toast.success("Register Success");
        Navigate("/");
      })
      .catch((e) => console.error("error ta hocche " + e));
  };

  return (
    <div>
      <div>
        <section>
          <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
            <div class="justify-center mx-auto text-left align-bottom transition-all transform bg-white rounded-lg sm:align-middle sm:max-w-2xl sm:w-full">
              <div>
                <div class="mt-3 text-center sm:mt-5">
                  <div class=" items-center w-full">
                    <h3 class="text-lg text-center font-bold text-neutral-600 leading-6 lg:text-5xl">
                      Sign Up
                    </h3>
                  </div>
                  <div class="mt-4 text-base text-gray-500">
                    <p>Register and get our services.</p>
                  </div>
                </div>
              </div>
              <div class="grid flex-wrap items-center justify-center grid-cols-1 mx-auto shadow-xl lg:grid-cols-2 rounded-xl">
                <div class="w-full px-6 py-3">
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

                      <input
                        type="file"
                        name="photo"
                        className="file-input file-input-bordered w-full max-w-xs"
                      />

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
