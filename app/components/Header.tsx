import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import { Link } from "@remix-run/react";

const Header = ({ links }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        isScrolled
          ? "flex items-center justify-between p-2 md:p-4"
          : "flex flex-col items-center justify-center py-2 md:py-4 md:gap-4"
      } w-full gap-2 sticky top-0 bg-white shadow-lg shadow-neutral-900 z-20 duration-300 ease-in-out`}
    >
      <Link to={"/"}>
        <h1 className="text-lg md:text-2xl lg:text-3xl">Logo</h1>
      </Link>
      <Navigation links={links} />
    </div>
  );
};

export default Header;
