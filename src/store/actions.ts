import { IPhones } from "../typings";
import { SET_PHONE_LIST, SET_PHONE_LIST_TYPE } from "./type";

interface ISetPhoneList {
  type: SET_PHONE_LIST_TYPE;
  payload: IPhones[];
}
//
export type TAction = ISetPhoneList;

export function setPhoneList(phoneList: IPhones[]): ISetPhoneList {
  return {
    type: SET_PHONE_LIST,
    payload: phoneList,
  };
}
