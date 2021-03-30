import React from "react";
import errorImg from "../assets/img/error404.svg";
import Container from "../components/Container";

export default function Page404() {
  return (
    <Container>
      <section className="h-screen md:h-full flex justify-center items-center flex-col">
        <img className="w-40 h-40 mb-8" src={errorImg} alt="error 404" />
        <p className="text-lg">Ops, essa página não existe!</p>
      </section>
    </Container>
  );
}
