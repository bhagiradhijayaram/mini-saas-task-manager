import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { logout } = useContext(AuthContext);
  const token = localStorage.getItem("token");

  return (
    <header className="bg-[#FFFFFF] fixed w-full z-50 px-6 border-b border-gray-200">
      <div className="max-w-7xl mx-auto py-3 flex items-center justify-between">
        <div className="flex items-center gap-2 text-2xl text-gray-800">
          <h2 className="text-2xl">MSaas</h2>
        </div>
        <div className="flex gap-3 items-center">
          {token ? (
            <button
              onClick={logout}
              className="px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-100"
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-100">
                Login
              </button>
            </Link>
          )}
          {!token ? (
            <Link to="/signup">
              <button className="w-[140px] h-10 rounded-full bg-[#1F6F5F] text-white overflow-hidden group flex items-center justify-center">
                Sign Up
              </button>
            </Link>
          ) : null}
        </div>
      </div>
    </header>
  );
}
