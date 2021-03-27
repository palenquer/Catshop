import React from "react";

export default function ContactSvg({src, alt ,href}) {
  return (
    <a className="cursor-pointer w-full h-full flex justify-center items-center hover:bg-gray-100" href={href}>
      <img className="w-8 h-8" src={src} alt={alt} />
    </a>
  );
}
