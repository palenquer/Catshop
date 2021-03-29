import React from "react";
import Container from "../components/Container";
import PageTitle from "../components/PageTitle";
import PostList from "../components/PostList";

export default function Home() {
  return (
    <Container>
      <PageTitle text="Catfacts"/>
      <section className=" w-full h-full grid grid-flow-col md:grid-flow-row md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 grid-rows-4 md:grid-rows-3 gap-4 mb-8">
        <PostList url="/591f98803b90f7150a19c229" />
        <PostList url="/591f98703b90f7150a19c144" />
        <PostList url="/5f8679a81fd4970017e07240" />
        <PostList url="/591f9868c5cbe314f7a7ad3a" />
      </section>
    </Container>
  );
}
