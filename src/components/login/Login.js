import React from "react";
import google from "../../assets/icon/google.svg";
import auth from "../../firebase.init";
import {
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  return (
    <div className=" ">
      <div class=" hero min-h-screen bg-base-200 ">
        <div class="hero-content flex-col lg:flex-row-reverse ">
          <div class="card flex-shrink-0 w-96 p-3  max-w-sm shadow-2xl bg-base-100">
            <div class="form-control ">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              
              <input
                type="text"
                placeholder="email"
                class="input input-bordered mb-3"
              />
              <input
                type="text"
                placeholder="password"
                class="input input-bordered"
              />
              <label class="label">
                <a href="#" class="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div class="form-control mt-6">
              <button class="btn btn-primary">Login</button>
            </div>
            <div class="flex flex-col w-full">
              <div class="divider">Or</div>
              <div class="grid h-20 card bg-base-300 rounded-box place-items-center">
                <button onClick={() => signInWithGoogle()}>
                  <img src={google}></img>
                </button>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
