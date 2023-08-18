import { FC, useState } from "react";
import { Link } from "react-router-dom";

interface NavProps {
  opened: boolean;
}

const Nav: FC<NavProps> = ({ opened }) => {
  const navLinks = ["Home", "Series", "Movies", "Favorite"];
  const [selectedLink, setSelectedLink] = useState(0);

  return (
    <nav
      className={
        opened
          ? "flex justify-center items-center fixed z-40 top-0 left-0 w-full h-full md:block md:w-auto md:h-auto md:sticky bg-main-black"
          : "hidden md:block md:w-auto md:h-auto md:sticky bg-main-black"
      }>
      <ul className="flex flex-col gap-y-5 text-xl md:inline-flex md:flex-row md:gap-x-5 md:text-base">
        {navLinks.map((item, index) => (
          <li
            className={
              selectedLink === index ? "font-black text-white" : "font-medium"
            }
            key={item}
            onClick={() => setSelectedLink(index)}>
            <Link to={item.toLocaleLowerCase()}>{item}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
