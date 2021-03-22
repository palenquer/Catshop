import React from "react";
import PostList from "../components/PostList";

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col items-center container mx-auto px-8">
      <section className="bg-white w-full h-20 flex justify-center items-center mt-8 rounded-lg shadow-md">
        <h1 className="font-lobster text-3xl">Cat Facts</h1>
      </section>
      <section className=" w-full h-full grid grid-flow-col md:grid-flow-row md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 grid-rows-4 md:grid-rows-3 gap-4 mt-8 mb-8">
        <PostList url="/591f98803b90f7150a19c229" />
        <PostList url="/591f98703b90f7150a19c144" />
        <PostList url="/5f8679a81fd4970017e07240" />
        <PostList url="/591f9868c5cbe314f7a7ad3a" />
      </section>
    </main>
  );
}
