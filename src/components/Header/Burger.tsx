import { FC } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseCircle } from "react-icons/ai";

interface BurgerProps {
  closeBurger: (isBurgerOpened: boolean) => void;
  opened: boolean;
}

const Burger: FC<BurgerProps> = ({ closeBurger, opened }) => {
  return (
    <div
      className="md:hidden"
      onClick={() => closeBurger(opened ? false : true)}>
      <button
        className={
          opened
            ? "absolute top-6 right-6 z-50"
            : "flex items-center text-main-gray p-3"
        }>
        {opened ? (
          <AiOutlineCloseCircle size="1.5em" />
        ) : (
          <GiHamburgerMenu size="1.5em" />
        )}
      </button>
    </div>
  );
};

export default Burger;
