export interface IChore {
  id: number;
  title: string;
  description?: string;
  image?: string | null;
  type?: ChoreTypes;
  done: boolean;
}

export enum ChoreTypes {
  HOMEWORK,
  ROOMCLEANING,
  PETWALK,
}