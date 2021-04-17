import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { search } from "../api/CatFactsApi";

export default function Post({ url, onClick }) {
  const [posts, setPosts] = useState("");

  useEffect(() => {
    search(url, setPosts);
  }, [url]);

  return (
      <Link to={`/posts/${posts._id}`}>
        <article
          className="bg-white p-4 rounded border-t-8 border-purple-400 overflow-y-auto shadow-md cursor-pointer h-full hover:bg-gray-100"
          onClick={onClick}
        >
          <p>{posts.text}</p>
        </article>
      </Link>
  );
}
