import React from "react";
import errorImg from "../assets/img/error404.svg";
import Container from "../components/Container";
import PageNotFound from "../components/PageNotFound";

export default function Page404() {
  return (
    <Container>
      <PageNotFound src={errorImg} text="Ops, essa página não existe!" />
    </Container>
  );
}
