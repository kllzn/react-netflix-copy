import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const navLinks = ["Home", "Series", "Movies", "Favorite"];
  const [selectedLink, setSelectedLink] = useState(0);

  return (
    <nav>
      <ul className="inline-flex  gap-x-5">
        {navLinks.map((item, index) => (
          <li
            className={
              selectedLink === index ? "font-black text-white" : "font-medium "
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
