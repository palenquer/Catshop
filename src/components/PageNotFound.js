import React from "react";

export default function PageNotFound({src, text}) {
  return (
    <section className="h-screen container mx-auto px-8 flex flex-col items-center justify-center">
      <img className="w-40 h-40 mb-8" src={src} alt="error 404" />
      <p className="text-lg">{text}</p>
    </section>
  );
}
