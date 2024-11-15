import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { createNewUser, user, setUser, updateUserProfile } = useContext(AuthContext);
  
  const navigate = useNavigate()

  const [error, setError] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    if (name.length < 5) {
      setError({ ...error, name: "must be more than 5 character long!" })
      return;
    }
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");

    console.log({ name, photo, email, password });

    createNewUser(email, password).then((result) => {
      const user = result.user;
        console.log(user); 
      setUser(user);
      updateUserProfile({ displayName: name, photoURL: photo })
        .then(() => {
        navigate('/')
        }).catch(err => {
        console.log(err)
      })
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
    })
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div
        className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10
      "
      >
        <h1 className="text-2xl font-semibold text-center">
          Register Your Account
        </h1>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>
          {
            error.name && <label className="label text-xs text-rose-500">
            {error.name}
          </label>
          }
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Register</button>
          </div>
        </form>
        <p className="text-center font-semibold">
          Already have an Account?{" "}
          <Link className="text-red-500" to="/auth/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
