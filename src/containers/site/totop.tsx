"use client";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function Totop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="back-to-top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`h-10 w-10 cursor-pointer hover:bg flex items-center justify-center rounded-full bg-accent text-background text-white text-sm fixed bottom-5 right-5 z-50 transition-opacity duration-300 ${
        show ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <ArrowUp />
    </div>
  );
}
