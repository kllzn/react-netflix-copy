import { FC } from "react";

interface WrapperProps {
  children: React.ReactNode;
  className?: string;
}

const Wrapper: FC<WrapperProps> = ({ children, className }) => {
  return (
    <div className={`max-w-[1356px] mx-auto my-0 px-3 ${className}`}>
      {children}
    </div>
  );
};

export default Wrapper;
