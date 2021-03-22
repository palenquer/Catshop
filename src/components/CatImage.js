import React, { useState, useEffect } from "react";
import { catSearch } from "../api/RandomCat";

export default function CatImage({url}) {
    const [catImage, setCatImage] = useState([0]);

  useEffect(() => {
    catSearch(url, setCatImage);
  }, [url]);

  return (
    <figure className="h-96 md:w-1/2">
      <img className="h-full w-full" src={catImage[0].url} alt="Cat" />
    </figure>
  );
}
