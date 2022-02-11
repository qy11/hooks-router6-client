import React, { FC, ReactElement, useCallback, useState } from "react";
import { IPhones } from "../../typings";
import Banner from "./Banner";
import { useColor, useVersion } from "./hooks";
import Price from "./Price/index";
import Selector from "../Selector";
import { useSelectorCount } from "../../hooks";
import ColorGroup from "./ColorGroup";
import VersionGroup from "./VersionGroup";
import Bottom from "./Bottom";
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
  const [count, setCurrentCount] = useSelectorCount(totalCount, limit);
  const addToCart = useCallback((total: number) => {
    console.log(total);
  }, []);
  return (
    <div className="detail-wrapper">
      <Banner img={currentColor.img} name={name} />
      <div className="info-wrap">
        <Price limit={limit} price={currentVersion.price} />
        <Selector count={count} setCount={setCurrentCount} />
        <ColorGroup colorId={colorId} colors={colors} setColorId={setColorId} />
        <VersionGroup
          versionId={versionId}
          version={version}
          setVersionId={setVersionId}
        />
      </div>
      <Bottom
        price={currentVersion.price}
        count={count}
        addToCart={addToCart}
      />
    </div>
  );
};

export default DetailPage;
