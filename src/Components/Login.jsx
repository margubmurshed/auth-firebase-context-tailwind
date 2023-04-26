import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../providers/UserContext";

const Login = () => {
  const {signIn} = useContext(UserContext);

    const handleLogin = async(event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        try{
          const userCredential = await signIn(email, password);
          form.reset();
          console.log(userCredential.user);
        } catch(e) {
          console.log(e.message)
        }
    }
  return (
    <div className="">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border border-black-100">
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
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
                  type="text"
                  name="password"
                  placeholder="password"
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
                <button className="btn btn-primary">Login</button>
              </div>
              <label className="label">
                  <Link to="/register" className="label-text-alt link link-hover text-center w-full">
                    New to this website?
                  </Link>
                </label>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
