import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const { setUser, userLogin } = useContext(AuthContext);

  const [error, setError] = useState({})

  const location = useLocation()
  const navigate = useNavigate()
  // console.log(location)
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // console.log({ email, password });

    userLogin(email, password).then((result) => {
      // console.log(result.user);
      setUser(result.user);
      navigate(location?.state ? location.state : '/')
    }).catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
      // alert(errorCode)
      setError({ ...error, login: errorCode })
    })
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div
        className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10
      "
      >
        <h1 className="text-2xl font-semibold text-center">
          Login Your Account
        </h1>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
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
              placeholder="password"
              className="input input-bordered"
              required
            />
            {
              error.login && (
                <lable className="label text-sm text-red-600">{error.login}</lable>
              )
            }
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Login</button>
          </div>
        </form>
        <p className="text-center font-semibold">
          Don't have an Account?{" "}
          <Link className="text-red-500" to="/auth/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
