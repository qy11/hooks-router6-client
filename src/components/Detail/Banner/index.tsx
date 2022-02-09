import React, { FC, ReactElement } from "react";

interface IProps {
  img: string;
  name: string;
}
const Banner: FC<IProps> = ({ img, name }): ReactElement => {
  return (
    <div>
      <img src={img} alt={name} />
    </div>
  );
};

export default Banner;
