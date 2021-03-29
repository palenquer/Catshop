import React from "react";

export default function PageTitle({text}) {
  return (
    <section className="bg-white w-full h-20 flex justify-center items-center mt-8 rounded-lg shadow-md mb-8">
      <h1 className="font-lobster text-3xl">{text}</h1>
    </section>
  );
}
