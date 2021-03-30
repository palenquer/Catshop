import React, { useState } from "react";
import PageTitle from "../components/PageTitle";
import { useForm } from "react-hook-form";

export default function Login() {
  const { register, handleSubmit, errors } = useForm();
  const [value, setValue] = useState({});
  const onSubmit = (data) => setValue(data);

  return (
    <main className="h-screen container mx-auto px-8 flex flex-col items-center">
      <PageTitle text="Login" />
      <form
        className="bg-white flex justify-center items-center flex-col rounded-lg shadow-md p-12 max-w-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className="flex flex-col justify-center items-center mb-4">
          <label className="text-lg font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            className="border-2 border-gray-300 rounded p-1"
            name="username"
            ref={register({ required: true, maxLength: 20 })}
          />
          {errors.username?.type === "required" && (
            <span className="text-red-400 text-sm">This field is required</span>
          )}
          {errors.username?.type === "maxLength" && (
            <span className="text-red-400 text-sm">
              Your input exceed maxLength (20)
            </span>
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
            ref={register({ required: true, maxLength: 20 })}
          />
          {errors.password?.type === "required" && (
            <span className="text-red-400 text-sm">This field is required</span>
          )}
          {errors.password?.type === "maxLength" && (
            <span className="text-red-400 text-sm">
              This field exceed maxLength (20)
            </span>
          )}
        </p>

        <button
          className="w-full bg-purple-400 p-2 rounded text-white font-bold text-lg hover:bg-purple-500 mt-4 focus:outline-none"
          type="submit"
        >
          Enter
        </button>
      </form>
    </main>
  );
}
