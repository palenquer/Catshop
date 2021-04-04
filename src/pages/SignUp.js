import React from "react";
import PageTitle from "../components/PageTitle";
import { useForm } from "react-hook-form";
import Form from "../components/Form";

export default function SignUp() {
  const {
    handleSubmit,
    formState: { errors },
    register,
    getValues,
  } = useForm();
  const onError = (errors, e) => console.log(errors, e);
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <main className="h-screen container mx-auto px-8 flex flex-col items-center">
      <PageTitle text="Sign up" />
      <Form onSubmit={handleSubmit(onSubmit, onError)}>
        <p className="flex flex-col justify-center items-center mb-4">
          <label className="text-lg font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            className="border-2 border-gray-300 rounded p-1"
            name="username"
            ref={register({
              required: true,
              minLength: 6,
              maxLength: 20,
              pattern: /^[a-zA-Z0-9]+$/,
            })}
          />
          {errors.username?.type === "required" && (
            <span className="text-red-400 text-sm">This field is required</span>
          )}
          {errors.username?.type === "maxLength" && (
            <span className="text-red-400 text-sm">
              this field cannot exceed 20 characters
            </span>
          )}
          {errors.username?.type === "minLength" && (
            <span className="text-red-400 text-sm">
              This field must have at least 6 characters long
            </span>
          )}
          {errors.username?.type === "pattern" && (
            <span className="text-red-400 text-sm">Character not valid</span>
          )}
        </p>
        <p className="flex flex-col justify-center items-center mb-4">
          <label className="text-lg font-bold mb-2" htmlFor="username">
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
        <p className="flex flex-col justify-center items-center mb-4">
          <label className="text-lg font-bold mb-2" htmlFor="username">
            Confirm Password
          </label>
          <input
            className="border-2 border-gray-300 rounded p-1"
            name="confirmPassword"
            type="password"
            ref={register({
              required: true,
              minLength: 6,
              maxLength: 20,
              pattern: /^[a-zA-Z0-9]+$/,
              validate: {
                matchesPreviousPassword: (value) => {
                  const { password } = getValues();
                  return password === value || "Passwords should match!";
                },
              },
            })}
          />
          {errors.confirmPassword?.type === "required" && (
            <span className="text-red-400 text-sm">This field is required</span>
          )}
          {errors.confirmPassword?.type === "maxLength" && (
            <span className="text-red-400 text-sm">
              this field cannot exceed 20 characters
            </span>
          )}
          {errors.confirmPassword?.type === "minLength" && (
            <span className="text-red-400 text-sm">
              This field must have at least 6 characters long
            </span>
          )}
          {errors.confirmPassword?.type === "pattern" && (
            <span className="text-red-400 text-sm">Character not valid</span>
          )}
          {errors.confirmPassword && (
            <span className="text-red-400 text-sm">Passwords should match</span>
          )}
        </p>

        <button
          className="w-full bg-purple-400 p-2 rounded text-white font-bold text-lg hover:bg-purple-500 mt-4 focus:outline-none"
          type="submit"
        >
          Submit
        </button>
      </Form>
    </main>
  );
}
