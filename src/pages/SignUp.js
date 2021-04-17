import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import { useForm } from "react-hook-form";
import Form from "../components/Form";
import { useAuth } from "../contexts/AuthContext";

export default function SignUp() {
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [validate, setValidate] = useState(false);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const {
    handleSubmit,
    formState: { errors },
    register,
    getValues,
  } = useForm();

  const onError = (errors, e) => console.log(errors, e);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      setError("");
      setValidate(true);
      await signup(data.email, data.password);
      history.push("/login");
    } catch {
      setError("failed to create an account");
      setValidate(false);
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <main className="h-screen container mx-auto px-8 flex flex-col items-center">
      <PageTitle text="Sign up" />
      <Form onSubmit={handleSubmit(onSubmit, onError)}>
        {validate ? (
          <span className="text-green-400">You created an account</span>
        ) : (
          <span className="text-red-400">{error}</span>
        )}
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
              maxLength: 40,
            })}
          />
          {errors.email?.type === "required" && (
            <span className="text-red-400 text-sm">This field is required</span>
          )}
          {errors.email?.type === "maxLength" && (
            <span className="text-red-400 text-sm">
              this field cannot exceed 40 characters
            </span>
          )}
          {errors.email?.type === "minLength" && (
            <span className="text-red-400 text-sm">
              This field must have at least 6 characters long
            </span>
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
              maxLength: 40,
              pattern: /^[a-zA-Z0-9]+$/,
            })}
          />
          {errors.password?.type === "required" && (
            <span className="text-red-400 text-sm">This field is required</span>
          )}
          {errors.password?.type === "maxLength" && (
            <span className="text-red-400 text-sm">
              this field cannot exceed 40 characters
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
              maxLength: 40,
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
          className={`${
            loading === true
              ? "w-full bg-purple-400 p-2 rounded text-white font-bold text-lg mt-4 focus:outline-none animate-pulse"
              : "w-full bg-purple-400 p-2 rounded text-white font-bold text-lg hover:bg-purple-500 mt-4 focus:outline-none"
          }`}
          type="submit"
        >
          {loading === true ? "Loading" : "Submit"}
        </button>
      </Form>
    </main>
  );
}
