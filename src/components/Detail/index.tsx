import React, { FC, ReactElement, useState } from "react";
import { IPhones } from "../../typings";
import Banner from "./Banner";
import { useColor, useVersion } from "./hooks";
import Price from "./Price/index";
interface IProps {
  phoneDetail: IPhones;
  cid: number;
  vid: number;
  totalCount: number;
}

const DetailPage: FC<IProps> = ({
  phoneDetail,
  cid,
  vid,
  totalCount,
}): ReactElement => {
  const { name, colors, version, limit } = phoneDetail;
  const [colorId, setColorId] = useState<number>(cid);
  const [versionId, setVersionId] = useState<number>(vid);
  const currentColor = useColor(colors, colorId);
  const currentVersion = useVersion(version, versionId);

  return (
    <div className="detail-wrapper">
      <Banner img={currentColor.img} name={name} />
      <div className="info-wrap">
        <Price limit={limit} price={currentVersion.price} />
      </div>
    </div>
  );
};

export default DetailPage;
