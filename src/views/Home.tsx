import React, { FC, ReactElement } from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../components/Header";

import { usePhoneList } from "../hooks";
import PhoneList from "../components/PhoneList";

/**
 * useEffect 里不能用 async , 因为 async 返回的是promise  清除函数 return () 就不能用了
 */
interface IProps {}

const Home: FC<IProps> = (): ReactElement => {
  const phoneList = usePhoneList();
  return (
    <div className="container">
      <Header headerTitle="Home列表" iconShow={false} />
      {/* 
        id：手机产品ID
        cid: color 颜色id
        vid: version 版本容量id
        count:购物车的数量
      */}
      <Link to="/detail">detail</Link>
      <br />
      <Link to="/cart">cart</Link>
      <br />
      <Link to="/invoices">invoices</Link>
      {/* <Outlet /> */}
      {phoneList?.length && <PhoneList phoneList={phoneList} />}
    </div>
  );
};

export default Home;
