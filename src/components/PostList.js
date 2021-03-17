import React, { useState, useEffect } from "react";
import { search } from "../api/api";

export default function PostList({ url }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    search(url, setPosts);
  }, [url]);

  return (
    <section className="w-full h-full flex flex-col md:flex-row md:flex-wrap md:justify-evenly mt-8">
      {posts.map((post) => (
        <article className="bg-white flex-grow w-full md:w-80 h-60 flex justify-center items-center m-4 p-4 rounded border-t-8 border-purple-400 overflow-y-auto" key={post._id}>
          <p>{post.text}</p>
        </article>
      ))}
    </section>
  );
}
