import React from "react";

export const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
        <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">Carina Gaspar</a>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
                <li>
                    <a>work</a>
                </li>
                <li>
                    <a>about</a>
                </li>
            </ul>
        </div>
    </div>
  );
};