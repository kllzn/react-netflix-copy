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
      className="md:hidden flex items-center p-1"
      onClick={() => closeBurger(opened ? false : true)}>
      <button
        className={
          opened
            ? "absolute top-4 right-4 z-50"
            : "flex items-center text-main-gray"
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
