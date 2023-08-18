import Wrapper from "../Wrapper";
import nexflixLogo from "../../assets/NetflixLogoSvg.svg";
import Nav from "./Nav";
import Search from "./Search";
import Profile from "./Profile";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Burger from "./Burger";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBurgerOpened, setIsBurgerOpened] = useState(false);

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

  useEffect(() => {
    if (document) {
      document.body.style.overflow = isBurgerOpened ? "hidden" : "auto";
    }
  }, [isBurgerOpened]);
  return (
    <header
      className={
        isScrolled
          ? "sticky top-0 left-0 z-10 bg-main-black bg-opacity-80"
          : "bg-main-black"
      }>
      <Wrapper>
        <div className="py-3 md:py-6 flex items-center justify-between">
          <div className="flex items-center md:min-w-[400px] justify-between">
            <Link to="" className="max-w-[110px]">
              <img
                src={nexflixLogo}
                alt=""
                className=" w-full h-full object-contain"
              />
            </Link>
            <Nav opened={isBurgerOpened} />
          </div>
          <Burger closeBurger={setIsBurgerOpened} opened={isBurgerOpened} />
          <div className="hidden md:flex md:items-center md:gap-x-5 md:justify-between">
            <Search></Search>
            <Profile></Profile>
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
