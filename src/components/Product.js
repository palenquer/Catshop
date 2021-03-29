import React from "react";

export default function Product({ src, price, off, text }) {

  function Percentage(price, off) {
    let percent = ((off / 100) * price).toFixed(2);
    return price - percent;
  }

  return (
    <div className="bg-white p-4 rounded shadow-md h-full flex items-center flex-col cursor-pointer">

      <figure className="flex flex-col justify-between items-center mb-2 border-b-2 border-gray-200">
        <img className="w-full h-40 mb-2" src={src} alt="product" />
      </figure>

      <div className="flex-grow flex h-full w-full flex-col">
        <div className="flex items-center mb-2 justify-between">
          <div>
            <span className="mr-2 line-through text-gray-500">R$ {price}</span>
            <h1 className="font-bold text-2xl">R$ {Percentage(price, off)}</h1>
          </div>
          <span className="text-sm text-green-400 ml-2 h-full">{off}% OFF</span>
        </div>

        <div className="flex">
          <p>{text}</p>
          <div></div>
        </div>
      </div>
    </div>
  );
}
