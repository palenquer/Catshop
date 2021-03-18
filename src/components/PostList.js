import React from "react";


export default function PostList({ children }) {


  return (
    <section className=" w-full h-full grid grid-flow-col md:grid-flow-row md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 grid-rows-4 md:grid-rows-3 gap-4 mt-8 mb-8">
      {children}
    </section>
  );
}
