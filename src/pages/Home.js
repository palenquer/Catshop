import React from "react";
import Post from "../components/Post";
import PostList from "../components/PostList";

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col items-center container mx-auto px-8">
      <section className="bg-white w-full h-20 flex justify-center items-center mt-8 rounded-lg">
        <h1 className="font-lobster text-3xl">Cat Facts</h1>
      </section>
      <PostList>
        <Post url='/591f98803b90f7150a19c229'/>
        <Post url='/591f98703b90f7150a19c144'/>
        <Post url='/5f8679a81fd4970017e07240'/>
        <Post url='/591f9868c5cbe314f7a7ad3a'/>
      </PostList>
    </main>
  );
}
