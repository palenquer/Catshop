import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import { useForm } from "react-hook-form";
import Form from "../components/Form";

export default function Login() {
  const { handleSubmit, errors, register } = useForm();
  const [value, setValue] = useState({});
  const onError = (errors, e) => console.log(errors, e);
  const onSubmit = (data) => {
    setValue(data);
  };

  return (
    <main className="h-screen container mx-auto px-8 flex flex-col items-center">
      <PageTitle text="Login" />
      <Form onSubmit={handleSubmit(onSubmit, onError)}>
        <p className="flex flex-col justify-center items-center mb-4">
          <label className="text-lg font-bold mb-2" htmlFor="username">
            Email
          </label>
          <input
            type="email"
            className="border-2 border-gray-300 rounded p-1"
            name="email"
            ref={register({
              required: true,
              minLength: 6,
              maxLength: 20,
            })}
          />
          {errors.email?.type === "required" && (
            <span className="text-red-400 text-sm">This field is required</span>
          )}
          {errors.email?.type === "maxLength" && (
            <span className="text-red-400 text-sm">
              this field cannot exceed 20 characters
            </span>
          )}
          {errors.email?.type === "minLength" && (
            <span className="text-red-400 text-sm">
              This field must have at least 6 characters long
            </span>
          )}
          {errors.email?.type === "pattern" && (
            <span className="text-red-400 text-sm">Character not valid</span>
          )}
        </p>
        <p className="flex flex-col justify-center items-center mb-4">
          <label className="text-lg font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="border-2 border-gray-300 rounded p-1"
            name="password"
            type="password"
            ref={register({
              required: true,
              minLength: 6,
              maxLength: 20,
              pattern: /^[a-zA-Z0-9]+$/,
            })}
          />
          {errors.password?.type === "required" && (
            <span className="text-red-400 text-sm">This field is required</span>
          )}
          {errors.password?.type === "maxLength" && (
            <span className="text-red-400 text-sm">
              this field cannot exceed 20 characters
            </span>
          )}
          {errors.password?.type === "minLength" && (
            <span className="text-red-400 text-sm">
              This field must have at least 6 characters long
            </span>
          )}
          {errors.password?.type === "pattern" && (
            <span className="text-red-400 text-sm">Character not valid</span>
          )}
        </p>

        <button
          className="w-full bg-purple-400 p-2 rounded text-white font-bold text-lg hover:bg-purple-500 mt-4 focus:outline-none"
          type="submit"
        >
          Enter
        </button>
      </Form>
      <Link className="text-purple-500 font-bold mt-4" to="/signup">Sign up here!</Link>
    </main>
  );
}
