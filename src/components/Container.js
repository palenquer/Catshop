import React from "react";

export default function Container({ children }) {
  return (
    <main className="flex-1 overflow-y-auto mx-auto px-8">
      {children}
    </main>
  );
}
