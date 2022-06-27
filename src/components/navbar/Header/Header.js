import React from "react";
import auth from "../../../firebase.init";
import { Link } from "react-router-dom";
import { useAuthState, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

const Header = () => {
const [user] = useAuthState(auth)
const HandleLogout=() =>{
  signOut(auth)
}
const [
  signInWithEmailAndPassword,
  user1,
  loading,
  error,
] = useSignInWithEmailAndPassword(auth);
  return (
    <div>
      <div class="navbar bg-base-100">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Inventory</a>
              </li>
            </ul>
          </div>
          <a class="btn btn-ghost normal-case text-xl">
            <Link to="/">Tech Gallery</Link>
          </a>
        </div>
        <div className="navbar-end">
          <div class="  hidden lg:flex">
            <ul class="menu menu-horizontal ">
              <li className="px-2">
                <Link to="/">Home</Link>
              </li>
              <li className="px-2">
                {
                  user? <Link to="/inventory">Inventory</Link> : ''
                }
              </li>
            </ul>
          </div>
          <div class=" px-2">
            <a class="btn">
            {
              user? <Link onClick={() => HandleLogout()} to="/login">Logout</Link>:<Link to="/login">Login</Link>
            }
              
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
