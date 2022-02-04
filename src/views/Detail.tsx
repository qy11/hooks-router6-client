import React, { FC, ReactElement } from "react";
import Header from "../components/Header";

interface IProps{
  
}

const Detail: FC = (): ReactElement => {
  return <div className="container">
     <Header headerTitle="商品列表" iconShow={true} />
  </div>;
};

export default Detail;
