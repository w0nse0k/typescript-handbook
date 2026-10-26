// export type이나 interface
export type Cat = { breed: string; yearOfBirth: number };

export interface Dog {
  breeds: string[];
  yearOfBirth: number;
}

export const createCatName = () => "fluffy";
