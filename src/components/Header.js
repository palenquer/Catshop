import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="w-screen h-20 font-mont sticky top-0 z-40 bg-white shadow-md">
      <nav className="flex items-center h-full justify-between px-8 relative">
        <Link className="text-4xl font-lobster flex" to="/">
          <h1>Catshop</h1>
        </Link>
        <div
          className="md:hidden cursor-pointer w-10 h-10 flex items-center justify-center"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 18c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z" />
          </svg>
        </div>
        <ul className="hidden md:flex font-semibold">
          <li className="mr-4">
            <Link
              className="bg-purple-500 py-3 px-6 rounded-full text-white"
              to="/"
            >
              Enter
            </Link>
          </li>
          <li className="hover:border-purple-400 border-b-4 border-transparent mr-4 w-20 flex justify-center">
            <Link to="/">Products</Link>
          </li>
          <li className="hover:border-purple-400 border-b-4 border-transparent mr-4 w-20 flex justify-center">
            <Link to="/">Blog</Link>
          </li>
          <li className="hover:border-purple-400 border-b-4 border-transparent w-20 flex justify-center">
            <Link to="/about">About</Link>
          </li>
        </ul>
        {open ? (
          <div className="h-screen w-screen absolute inset-0 bg-white z-50 flex justify-center items-center">
            <div
              className="w-10 h-10 absolute top-5 right-8 flex justify-center items-center cursor-pointer hover:text-purple-500 fill-current"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <svg
                className=""
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z" />
              </svg>
            </div>

            <ul className="flex flex-col font-semibold justify-center items-center">
              <li className="hover:text-purple-500 p-2 w-20 flex justify-center text-2xl">
                <Link
                  onClick={() => {
                    setOpen(!open);
                  }}
                  to="/"
                >
                  Enter
                </Link>
              </li>
              <li className="hover:text-purple-500 p-2 w-20 flex justify-center text-2xl">
                <Link
                  onClick={() => {
                    setOpen(!open);
                  }}
                  to="/"
                >
                  Products
                </Link>
              </li>
              <li className="hover:text-purple-500 p-2 w-20 flex justify-center text-2xl">
                <Link
                  onClick={() => {
                    setOpen(!open);
                  }}
                  to="/"
                >
                  Blog
                </Link>
              </li>
              <li className="hover:text-purple-500 p-2 w-20 flex justify-center text-2xl">
                <Link
                  onClick={() => {
                    setOpen(!open);
                  }}
                  to="/about"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}
      </nav>
    </header>
  );
}
