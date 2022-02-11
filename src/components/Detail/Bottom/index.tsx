import React, { FC, ReactElement } from "react";
import "./index.sass";
interface IProps {
  price: number;
  count: number;
  addToCart: (total: number) => void;
}

const Bottom: FC<IProps> = ({ price, count, addToCart }): ReactElement => {
  const total = count * price;
  return (
    <div className="bottom">
      <span>￥{total.toFixed(2)}</span>
      <button onClick={() => addToCart(total)}>加入购物车</button>
    </div>
  );
};

export default Bottom;
