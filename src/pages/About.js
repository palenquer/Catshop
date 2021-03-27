import React from "react";

import facebook from "../assets/img/icons/036-facebook.svg";
import whatsapp from "../assets/img/icons/005-whatsapp.svg";
import youtube from "../assets/img/icons/001-youtube.svg";
import twitter from "../assets/img/icons/008-twitter.svg";
import instagram from "../assets/img/icons/029-instagram.svg";
import gmail from "../assets/img/icons/gmail.svg";
import location from "../assets/img/icons/location.svg";
import ContactSvg from "../components/ContactSvg";

export default function About() {
  return (
    <>
      <main className="w-full h-full flex flex-col items-center container mx-auto px-8">
        <section className="bg-white w-full h-20 flex justify-center items-center mt-8 rounded-lg">
          <h1 className="font-lobster text-3xl">About</h1>
        </section>
        <article className="mt-8 bg-white p-8 rounded-lg mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac
          sapien eget dolor tincidunt imperdiet posuere eu odio. Nunc vitae
          nulla nec nunc luctus interdum. Suspendisse congue sem sit amet nunc
          pretium, eu pellentesque enim dapibus. Etiam id mattis turpis. Ut at
          blandit justo. Donec vitae orci id augue congue pellentesque. In nisl
          urna, fringilla sit amet turpis vel, congue sagittis sem. Vivamus
          scelerisque odio ac sapien euismod laoreet. Suspendisse egestas quam
          mollis ante scelerisque semper. Nulla nunc dolor, finibus et risus
          vel, egestas porttitor ante. Sed tincidunt eros sed venenatis egestas.
          Vestibulum porttitor diam vel lectus pellentesque, et venenatis orci
          laoreet. Cras quis dolor fringilla, imperdiet quam vitae, ornare diam.
          Donec non egestas diam, quis consectetur orci. Nam consectetur diam
          sit amet enim sollicitudin venenatis.
        </article>
      </main>
      <footer className="w-full h-60 md:h-20 bg-white flex">
        <div className="flex-grow h-full flex flex-col md:flex-row justify-evenly p-2 border-r-2 border-blue-100 text-sm">
          <figure className="flex items-center">
            <img className="w-6 h-6 mr-2" src={whatsapp} alt="whatsapp" />
            <figcaption><span className="font-bold">Whatsapp:</span> (00)0000-0000</figcaption>
          </figure>
          <figure className="flex items-center">
            <img className="w-6 h-6 mr-2" src={location} alt="location" />
            <figcaption><span className="font-bold">Location:</span> Adress Example</figcaption>
          </figure>
          <figure className="flex items-center">
            <img className="w-6 h-6 mr-2" src={gmail} alt="gmail" />
            <figcaption><span className="font-bold">Email:</span> test@example.com</figcaption>
          </figure>
        </div>

        <div className="flex w-1/3 h-full flex-col md:flex-row justify-evenly items-center">
          <ContactSvg href="https://www.facebook.com" src={facebook} alt="facebook" />
          <ContactSvg href="https://www.youtube.com" src={youtube} alt="youtube" />
          <ContactSvg href="https://www.twitter.com" src={twitter} alt="twitter" />
          <ContactSvg href="https://www.instagram.com" src={instagram} alt="instagram" />
        </div>
      </footer>
    </>
  );
}
