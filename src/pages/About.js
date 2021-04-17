import React from "react";

import facebook from "../assets/img/icons/036-facebook.svg";
import whatsapp from "../assets/img/icons/005-whatsapp.svg";
import youtube from "../assets/img/icons/001-youtube.svg";
import twitter from "../assets/img/icons/008-twitter.svg";
import instagram from "../assets/img/icons/029-instagram.svg";
import gmail from "../assets/img/icons/gmail.svg";
import location from "../assets/img/icons/location.svg";

import PageTitle from "../components/PageTitle";
import Container from "../components/Container";
import ContactItem from "../components/ContactItem";
import Footer from "../components/Footer";
import ContactItemWrapper from "../components/ContactItemWrapper";
import AboutText from "../components/AboutText";
import ContactMediaWrapper from "../components/ContactMediaWrapper";
import ContactMedia from "../components/ContactMedia";

export default function About() {
  return (
    <>
      <Container>
        <PageTitle text="About" />
        <AboutText />
      </Container>

      <Footer>
        <ContactItemWrapper>
          <ContactItem src={whatsapp} name="Whatsapp" info="(00)0000-0000" />
          <ContactItem src={gmail} name="Email" info="text@example.com" />
          <ContactItem src={location} name="Location" info="example" />
        </ContactItemWrapper>

        <ContactMediaWrapper className="flex w-1/3 h-full flex-col md:flex-row justify-evenly items-center">
          <ContactMedia
            href="https://www.facebook.com"
            src={facebook}
            alt="facebook"
          />
          <ContactMedia
            href="https://www.youtube.com"
            src={youtube}
            alt="youtube"
          />
          <ContactMedia
            href="https://www.twitter.com"
            src={twitter}
            alt="twitter"
          />
          <ContactMedia
            href="https://www.instagram.com"
            src={instagram}
            alt="instagram"
          />
        </ContactMediaWrapper>
      </Footer>
    </>
  );
}
