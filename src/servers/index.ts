import axios from "../libs/https";

// export const getPhones<T> = (): Promise<T> => {
//   return axios
//     .get<T,T>("/phones")
//     .then((data: T) => {
//       return data;
//     })
//     .catch((err) => {
//       throw new Error("Request failed" , err);
//     });
// };
export function getPhones<T>(): Promise<T> {
  return axios
    .get<T, T>("/phones")
    .then((data: T) => {
      return data;
    })
    .catch((err) => {
      throw new Error("Request failed" + err);
    });
}
