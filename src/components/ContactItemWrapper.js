import React from "react";

export default function ContactItemWrapper({ children }) {
  return (
    <div className="flex-grow h-full flex flex-col md:flex-row justify-evenly p-2 border-r-2 border-blue-100 text-sm">
      {children}
    </div>
  );
}
