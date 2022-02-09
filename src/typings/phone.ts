interface IPhones {
  id: number;
  name: string;
  limit: number;
  colors: IPoneColor[];
  version: IPoneVersion[];
}

interface IFlatPhones extends IPhones {
  currentColor: IPoneColor;
}

interface IPoneColor {
  cid: number;
  mark: string;
  title: string;
  img: string;
}
interface IPoneVersion {
  vid: number;
  mark: string;
  title: string;
  price: number;
}
export type { IPhones, IPoneColor, IPoneVersion, IFlatPhones };
