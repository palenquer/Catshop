import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { search } from "../api/CatFactsApi";
import CatImage from "../components/CatImage";

export default function Post() {
  const { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    search(`/${id}`, setPost);
  }, [id]);

  return (
    <main className="w-full h-full flex items-center justify-center container mx-auto px-8">
      <section className="flex flex-col md:flex-row rounded-lg shadow-md">
        <CatImage url="/search"/>
        <article className="bg-white w-1/2 h-96 flex justify-center items-center p-4">
          <p>{post.text}</p>
        </article>
      </section>
    </main>
  );
}
