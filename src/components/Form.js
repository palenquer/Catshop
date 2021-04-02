import React from "react";

export default function Form({ children, onSubmit }) {
  return (
    <form
      className="bg-white flex justify-center items-center flex-col rounded-lg shadow-md p-12"
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
}
