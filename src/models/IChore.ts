export interface IChore {
  id: number;
  title: string;
  description?: string;
  image: any;
  type?: ChoreTypes;
  done: boolean;
  kids: Kid[];
  price: number;
}

export enum ChoreTypes {
  HOMEWORK,
  ROOMCLEANING,
  PETWALK,
}

export type Kid = {
  id: string;
  title: string;
  tasks: number;
  img: any;
}