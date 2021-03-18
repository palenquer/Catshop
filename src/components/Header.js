import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-screen h-20 font-mont sticky top-0 z-50 bg-white shadow-md">
      <nav className="flex items-center h-full justify-between px-8">
        <Link className="text-4xl font-lobster flex" to="/">
          <h1>Catshop</h1>
        </Link>
        <ul className="hidden md:flex font-semibold">
          <li className="mr-4">
            <Link
              className="bg-purple-500 py-3 px-6 rounded-full text-white"
              to="/"
            >
              Enter
            </Link>
          </li>
          <li className="hover:border-purple-500 border-b-4 mr-4 w-20 flex justify-center">
            <Link to="/">Products</Link>
          </li>
          <li className="hover:border-purple-500 border-b-4 mr-4 w-20 flex justify-center">
            <Link to="/">Blog</Link>
          </li>
          <li className="hover:border-purple-500 border-b-4 w-20 flex justify-center">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
