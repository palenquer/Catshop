import React from "react";
import PostList from "../components/PostList";

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col items-center container mx-auto px-8">
      <section className="bg-white w-full h-20 flex justify-center items-center mt-8 rounded-lg">
        <h1 className="font-lobster text-3xl">Cat Facts</h1>
      </section>
      <PostList url={'/random?animal_type=cat&amount=4'}/>
    </main>
  );
}
