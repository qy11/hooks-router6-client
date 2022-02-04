import React, { FC, ReactElement } from "react";
import { Link, Outlet } from "react-router-dom";
interface IProps {}

const Home: FC = (): ReactElement => {
  return (
    <div className="container">
      <p>Home</p>
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
