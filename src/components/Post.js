import React, { useState, useEffect } from "react";
import { search } from "../api/api";

export default function Post({ url, key }) {
  const [posts, setPosts] = useState("");

  useEffect(() => {
    search(url, setPosts);
  }, [url]);
  return (
    <article
      className="bg-white p-4 rounded border-t-8 border-purple-400 overflow-y-auto shadow-md"
      key={key}
    >
      <p>{posts.text}</p>
    </article>
  );
}
