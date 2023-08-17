import { FC } from "react";
import { AiFillStar } from "react-icons/ai";

interface RatingProps {
  rating?: number;
}

const Rating: FC<RatingProps> = ({ rating }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <AiFillStar
            key={i}
            size="28px"
            className={
              ratingValue <= Math.floor(rating ? rating / 2 : 0)
                ? "text-[#ffc107]"
                : "text=[#e4e5e9]"
            }
          />
        );
      })}
    </div>
  );
};

export default Rating;
