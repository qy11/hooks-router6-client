//
import { useState } from "react";
import { IPhones } from "../typings";
import { getPhones } from "./../servers/index";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
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
