//
import { useState } from "react";
import { IPhones, IFlatPhones, IPoneColor, IState } from "../typings";
import { getPhones } from "./../servers/index";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { SET_PHONE_LIST } from "./../store/type";
import { COUNT_TYPE } from "../components/Selector";

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
  return phoneList.find((phone: IPhones) => phone.id === parseInt(id, 10));
};

export function useSelectorCount(
  defaultCount: number,
  limit: number
): [number, (type: COUNT_TYPE) => void] {
  const [count, setCount] = useState<number>(defaultCount);
  const setCurrentCount = function (type: COUNT_TYPE) {
    setCount((count: number) => {
      switch (type) {
        case COUNT_TYPE.MINUS:
          if (count <= 1) {
            return count;
          }
          return count - 1;
        case COUNT_TYPE.PLUS:
          if (count >= limit) {
            return count;
          }
          return count + 1;
        default:
          return count;
      }
    });
  };
  return [count, setCurrentCount];
}
