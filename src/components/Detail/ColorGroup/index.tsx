import React, { FC, ReactElement } from "react";
import { IPoneColor } from "../../../typings";
import "./index.sass";
interface IProps {
  colorId: number;
  colors: IPoneColor[];
  setColorId: (id: number) => void;
}
const ColorGroup: FC<IProps> = ({
  colorId,
  colors,
  setColorId,
}): ReactElement => {
  return (
    <div>
      <h2>颜色选择：</h2>
      {colors.map((color: IPoneColor, index: number) => (
        <button
          key={index}
          onClick={() => setColorId(color.cid)}
          className={["radio-btn", color.cid === colorId ? "current" : ""].join(
            " "
          )}
        >
          {color.title}
        </button>
      ))}
    </div>
  );
};

export default ColorGroup;
