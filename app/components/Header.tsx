import Navigation from "./Navigation";

const Header = ({ links }) => {
  return (
    <div className="flex flex-col items-center justify-start gap-4 p-4">
      <h1>Logo</h1>
      <Navigation links={links} />
    </div>
  );
};

export default Header;
