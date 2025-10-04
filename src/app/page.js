"use client";   // 👈 Obligatoire pour utiliser useState / useEffect

import { useState, useEffect } from "react";

export default function Home() {
  const text = "Welcome in Pink October 2025";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!deleting && index < text.length) {
        setDisplayText(text.substring(0, index + 1));
        setIndex(index + 1);
      } else if (deleting && index > 0) {
        setDisplayText(text.substring(0, index - 1));
        setIndex(index - 1);
      } else if (index === text.length) {
        setDeleting(true);
      } else if (index === 0 && deleting) {
        setDeleting(false);
      }
    }, 150);
    return () => clearInterval(interval);
  }, [index, deleting]);

  return (
    <div className="bg-black min-h-screen flex flex-col">
      {/* Barre de navigation */}
      <nav className="bg-black bg-transparent shadow-md px-8 py-4 flex items-center">
        {/*<img src="/logo.png" alt="Logo Dev Girls" className="h-10" />*/}
         <p
          className="mt-6 text-3xl font-semibold bg-gradient-to-r from-pink-500 via-fuchsia-600 to-purple-700 bg-clip-text text-transparent"
        >
           #Dev_Girls
        </p>
       
      </nav>

      {/* Section principale */}
      <main className="flex flex-col items-center justify-center flex-1 text-center px-4">
        <h1 className="flex items-center justify-center gap-2 text-4xl font-bold text-white bg-black px-4 py-2 rounded-xl">
          Hello, Dev_Girls 🌸
           <span className="wave text-4xl">🖐️</span>
        </h1>

        <p
  className="mt-6 text-3xl font-semibold bg-gradient-to-r from-pink-500 via-fuchsia-600 to-purple-700 bg-clip-text text-transparent"
        >
          {displayText}
        </p>
      </main>
    </div>
  );
}
