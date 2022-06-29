import React from "react";
import { Outlet, Link } from "react-router-dom";
import MyInventory from "./myinventory/MyInventory";

const Inventory = () => {
  return (
    <div>
      <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col items-center justify-center">
          <Outlet />
          <label
            for="my-drawer-2"
            class="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu gap-4  p-4 overflow-y-auto w-56 bg-base-100 text-base-content">
            <li>
              <Link to="/inventory">My inventory</Link>
            </li>
            <li>
              <Link to="/inventory/AllInventory">All Inventory</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
