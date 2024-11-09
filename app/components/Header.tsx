import { useState, useEffect } from "react";
import Navigation from "./Navigation";
import { Link } from "@remix-run/react";

const Header = ({ links, logo }) => {
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
          ? "flex items-center justify-evenly p-2"
          : "flex flex-col items-center justify-center md:gap-4"
      } w-full gap-2 sticky top-0 bg-white shadow-lg shadow-neutral-900 z-20 duration-300 ease-in-out`}
    >
      <Link to={"/"}>
        <img src={logo.url} width="170px" height="60px" />
      </Link>
      <Navigation links={links} />
    </div>
  );
};

export default Header;
