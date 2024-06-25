import { Link, useLocation } from "@remix-run/react";

const Navigation = ({ links }) => {
  const location = useLocation();

  return (
    <nav className="flex justify-evenly gap-1 sm:gap-2 md:gap-4 w-full md:w-[80vw]">
      {links.map(({ link, title }, index) => {
        const isActive = location.pathname === link;

        return (
          <Link
            key={index}
            to={link}
            className={`text-sm sm:text-md md:text-xl font-semibold p-0 md:p-3 hover:scale-110 duration-500 ease-in-out ${
              isActive ? "border-b-4 border-black" : ""
            }`}
          >
            {title}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
