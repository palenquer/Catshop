import React from "react";

export default function ContactItem({ src, name, info }) {
  return (
    <figure className="flex items-center">
      <img className="w-6 h-6 mr-2" src={src} alt={src} />
      <figcaption>
        <span className="font-bold">{name + ": "}</span>
        {info}
      </figcaption>
    </figure>
  );
}
