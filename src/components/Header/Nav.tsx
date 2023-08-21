import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface NavProps {
  opened: boolean;
}

const Nav: FC<NavProps> = ({ opened }) => {
  const navLinks = ["Home", "Series", "Movies", "Favorite"];
  const [pathName, setPathName] = useState("");

  useEffect(() => {
    const url = window.location.pathname;
    setPathName(url.slice(1, url.length));
  }, []);

  return (
    <nav
      className={
        opened
          ? "flex justify-center items-center fixed z-40 top-0 left-0 w-full h-full md:block md:w-auto md:h-auto md:sticky bg-main-black"
          : "hidden md:block md:w-auto md:h-auto md:sticky"
      }>
      <ul className="flex flex-col gap-y-5 text-xl md:inline-flex md:flex-row md:gap-x-5 md:text-base">
        {navLinks.map((item) => (
          <li
            className={
              item.toLowerCase() === pathName
                ? "font-black text-white"
                : "font-medium"
            }
            key={item}
            onClick={() => setPathName(item.toLowerCase())}>
            <Link to={item.toLocaleLowerCase()}>{item}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
