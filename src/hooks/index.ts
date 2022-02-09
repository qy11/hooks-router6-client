//
import { useState } from "react";
import { IPhones, IFlatPhones, IPoneColor, IState } from "../typings";
import { getPhones } from "./../servers/index";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { SET_PHONE_LIST } from "./../store/type";

export const usePhoneList = (): IPhones[] => {
  const [phoneList, setPhoneList] = useState<IPhones[]>([]);

  const dispatch: Dispatch = useDispatch();

  const $getPhones = async () => {
    const data = await getPhones<IPhones[]>();
    dispatch({
      type: SET_PHONE_LIST,
      payload: data,
    });
    setPhoneList(data);
  };

  useEffect(() => {
    $getPhones();
  }, [dispatch]);

  return phoneList;
};

export const useFlatPhoneList = (phoneList: IPhones[]): IFlatPhones[] => {
  let flatPhoneList: IFlatPhones[] = [];
  phoneList.map((phone: IPhones) => {
    phone.colors.map((c: IPoneColor) => {
      flatPhoneList.push({ ...phone, currentColor: c });
      return c;
    });
    return phone;
  });
  return flatPhoneList;
};

export const usePhoneDetail = (id: string): IPhones | undefined => {
  const phoneList = useSelector((state: IState) => state.phoneList);
  return phoneList.find((phone: IPhones) => phone.id === parseInt(id));
};
