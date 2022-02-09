import React, { FC, ReactElement } from "react";
import { IPhones, IFlatPhones, IPoneColor, IPoneVersion } from "../../typings";
import { Link } from "react-router-dom";
import "./index.css";
interface IProps {
  dataItem: IFlatPhones;
}

const PhoneItem: FC<IProps> = ({ dataItem }): ReactElement => {
  const {
    currentColor: { cid, mark, title, img },
    name,
    colors,
    version,
    limit,
    id,
  } = dataItem;
  return (
    <>
      <Link
        to={`/detail/${id}/${cid}/${version[0].vid}/1`}
        className="item-flex"
      >
        <div className="img-wrap">
          <img src={img} alt={img} />
        </div>
        <div className="info-wrap">
          <div className="title">{name + " " + title}</div>
          <div className="badge-wrap color">
            {colors.map((c: IPoneColor, i: number) => (
              <span key={i}>{c.title}</span>
            ))}
            <div>
              {version.map((v: IPoneVersion, i: number) => (
                <span key={i}>{v.title}</span>
              ))}
              <p>{`￥${version[0].price}起`}</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default PhoneItem;
