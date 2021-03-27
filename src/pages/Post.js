import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { search } from "../api/CatFactsApi";
import CatImage from "../components/CatImage";

export default function Post() {
  let history = useHistory();
  const { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    search(`/${id}`, setPost)
    .catch(() => {
      history.push('/404')
    })
  }, [id, history]);

  return (
    <main className="w-full h-full flex items-center justify-center container mx-auto px-8">
      <section className="flex flex-col md:flex-row rounded-lg shadow-md my-8 max-w-4xl">
        <CatImage url="/search"/>
        <article className="bg-white h-96 flex justify-center items-center p-4 md:w-1/2">
          <p>{post.text}</p>
        </article>
      </section>
    </main>
  );
}
