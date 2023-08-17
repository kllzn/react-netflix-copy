import Wrapper from "../Wrapper";
import nexflixLogo from "../../assets/NetflixLogoSvg.svg";
import Nav from "./Nav";
import Search from "./Search";
import Profile from "./Profile";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
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
    <header
      className={
        isScrolled
          ? "sticky top-0 left-0 z-10 bg-main-black bg-opacity-80"
          : "bg-main-black"
      }>
      <Wrapper>
        <div className=" py-6 flex items-center justify-between">
          <div className="flex items-center min-w-[400px] justify-between">
            <Link to="" className="max-w-[110px]">
              <img
                src={nexflixLogo}
                alt=""
                className=" w-full h-full object-contain"
              />
            </Link>
            <Nav />
          </div>
          <div className="flex items-center gap-x-5 justify-between">
            <Search></Search>

            <Profile></Profile>
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
