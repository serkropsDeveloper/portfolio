import { Link } from "@remix-run/react";
const Navigation = ({ links }) => {
  return (
    <nav className="flex justify-center gap-5 w-full">
      {links.map(({ link, title }, index) => (
        <Link key={index} to={link}>
          {title}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
