import React from "react";

export default function ContactMediaWrapper({ children }) {
  return (
    <div className="flex w-1/3 h-full flex-col md:flex-row justify-evenly items-center">
      {children}
    </div>
  );
}
