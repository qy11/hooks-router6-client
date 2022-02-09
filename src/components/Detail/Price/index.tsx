import React, { FC, ReactElement } from "react";

interface IProps {
  limit: number;
  price: number;
}
const Price: FC<IProps> = ({ limit, price }): ReactElement => {
  return (
    <p>
      <span>限购数量：{limit}台</span>
      <span>￥{price.toFixed(2)}</span>
    </p>
  );
};

export default Price;
