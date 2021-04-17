import React from "react";

export default function Footer({children}) {
  return (
    <footer className="w-full h-60 md:h-20 bg-white flex shadow-md">
        {children}
    </footer>
  );
}
