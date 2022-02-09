import { FC, ReactElement } from "react";
import { IPhones, IFlatPhones } from "../../typings";
import { useFlatPhoneList } from "../../hooks";
import PhoneItem from "./Item";

import "./index.css";

interface IProps {
  phoneList: IPhones[];
}

const PhoneList: FC<IProps> = ({ phoneList }): ReactElement => {
  const flatPhoneList: IFlatPhones[] = useFlatPhoneList(phoneList);
  return (
    <>
      {flatPhoneList.map((phone: IFlatPhones, index: number) => (
        <PhoneItem key={index} dataItem={phone} />
      ))}
    </>
  );
};
export default PhoneList;
