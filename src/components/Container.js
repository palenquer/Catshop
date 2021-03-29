import React from "react";

export default function Container({ children }) {
  return (
    <main className="w-full h-full flex flex-col items-center container mx-auto px-8">
      {children}
    </main>
  );
}
