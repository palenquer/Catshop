import React from "react";
import Container from "../components/Container";
import PageTitle from "../components/PageTitle";
import Post from "../components/Post";
import PostList from "../components/PostList";

export default function Home() {
  return (
    <Container>
      <PageTitle text="Catfacts" />
      <PostList>
        <Post url="/591f98803b90f7150a19c229" />
        <Post url="/591f98703b90f7150a19c144" />
        <Post url="/5f8679a81fd4970017e07240" />
        <Post url="/591f9868c5cbe314f7a7ad3a" />
      </PostList>
    </Container>
  );
}
