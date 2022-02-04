import { IState } from "../typings";
import { TAction } from "./actions";
import initialSate from "./state";
import { SET_PHONE_LIST } from "./type";
//
export function reducer(state: IState = initialSate, action: TAction): IState {
  switch (action.type) {
    case SET_PHONE_LIST:
      return {
        ...state,
        phoneList: action.payload,
      };
    default:
      return state;
  }
}
