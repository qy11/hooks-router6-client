import React, { FC, ReactElement } from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { usePhoneDetail } from "../hooks";
import { IPhones } from "../typings";
import DetailPage from "./../components/Detail/index";
interface IProps {}
interface IUrlParams {
  id: string | number;
  cid: string | number;
  vid: string | number;
  count: string | number;
}

const Detail: FC<IProps> = (): ReactElement => {
  const { id, cid, vid, count } = useParams();
  console.log(id, cid, vid, count);
  if (!id || !cid || !vid) {
    // 一定会传过来的，除非恶意请求，直接返回首页
    window.location.href = "/";
  }

  const phoneDetail: IPhones | undefined = usePhoneDetail(id!); // 后面加了 ! 相当于 断言
  // if (!phoneDetail) {
  //   window.location.href = "/";
  // }

  return (
    <div className="container">
      <Header headerTitle="商品列表" iconShow={true} />
      {phoneDetail && (
        <DetailPage
          phoneDetail={phoneDetail}
          cid={parseInt(cid as string)}
          vid={parseInt(vid as string)}
          totalCount={parseInt(count as string)}
        />
      )}
    </div>
  );
};

export default Detail;
