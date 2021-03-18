import React, { useState, useEffect } from "react";
import { search } from "../api/api";

export default function Post({ url, key }) {
  const [posts, setPosts] = useState("");

  useEffect(() => {
    search(url, setPosts);
  }, [url]);
  return (
    <article
      className="bg-white flex-grow w-full md:w-80 h-60 flex justify-center items-center m-4 p-4 rounded border-t-8 border-purple-400 overflow-y-auto"
      key={key}
    >
      <p>{posts.text}</p>
    </article>
  );
}
