import React from "react";


export default function PostList({ url, children }) {


  return (
    <section className="w-full h-full flex flex-col md:flex-row md:flex-wrap md:justify-evenly mt-8">
      {children}
    </section>
  );
}
