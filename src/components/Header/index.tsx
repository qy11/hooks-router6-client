import React, { FC, ReactElement } from "react";
import { Link } from "react-router-dom";
import "./index.css";
interface IProps {
  headerTitle: string;
  iconShow: boolean;
}

const Header: FC<IProps> = ({ headerTitle, iconShow }): ReactElement => {
  return (
    <div className="header">
      <div>{iconShow && <Link to="/" > {"<"} </Link>}</div>
      <h1>{headerTitle}</h1>
    </div>
  );
};

export default Header;
