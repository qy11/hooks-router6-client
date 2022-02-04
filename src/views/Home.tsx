import React, { FC, ReactElement } from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../components/Header";

import { usePhoneList } from "../hooks";
/**
 * useEffect 里不能用 async , 因为 async 返回的是promise  清除函数 return () 就不能用了
 */
interface IProps {}

const Home: FC<IProps> = (): ReactElement => {
  const phoneList = usePhoneList();
  console.log(phoneList);

  return (
    <div className="container">
      <Header headerTitle="商品列表" iconShow={false} />
      <Link to="/detail">detail</Link>
      <br />
      <Link to="/cart">cart</Link>
      <br />
      <Link to="/invoices">invoices</Link>
      <Outlet />
    </div>
  );
};

export default Home;
