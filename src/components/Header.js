import React from "react";
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="w-screen h-20 font-mont text-gray-800">
      <nav className="flex items-center h-full justify-between px-8">
        <Link className="text-4xl font-lobster text-gray-600" to="/">Petshop</Link>
        <ul className="flex font-semibold">
          <li className="mr-4">
            <Link
              className="bg-purple-500 py-3 px-6 rounded-full text-white"
              to="/"
            >
              Enter
            </Link>
          </li>
          <li className="mr-4">
            <Link to="/">Products</Link>
          </li>
          <li className="mr-4">
            <Link to="/">Blog</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
