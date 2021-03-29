import React from "react";
import Container from "../components/Container";
import PageTitle from "../components/PageTitle";
import soap from "../assets/img/soap.svg";
import Product from "../components/Product";
import cathouse from "../assets/img/cathouse.svg";
import litterbox from "../assets/img/litterbox.svg";

export default function Products() {
  return (
    <Container>
      <PageTitle text="Products" />
      <section className="w-full h-full grid grid-flow-col grid-cols-2 md:grid-cols-3 grid-rows-3 md:grid-rows-2 gap-4 mb-8">
        <Product
          src={cathouse}
          price={(109.9).toFixed(2)}
          off="50"
          text="Cat House"
        />
        <Product
          src={litterbox}
          price={(20.9).toFixed(2)}
          off="5"
          text="Cat Sandbox"
        />
        <Product
          src={soap}
          price={(12.9).toFixed(2)}
          off="9"
          text="Cat Shampoo"
        />
        <Product
          src={soap}
          price={(12.9).toFixed(2)}
          off="9"
          text="Cat Shampoo"
        />
        <Product
          src={soap}
          price={(12.9).toFixed(2)}
          off="9"
          text="Cat Shampoo"
        />
        <Product
          src={soap}
          price={(12.9).toFixed(2)}
          off="9"
          text="Cat Shampoo"
        />
      </section>
    </Container>
  );
}
