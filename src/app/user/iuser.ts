export interface IUser {
  id: number;
  name: string;
  age: number;
}

export const UserKeys = [ "id", "name", "age" ];

export const users: IUser[] = [
  {id: 1, name: "taro", age: 20},
  {id: 2, name: "jiro", age: 25},
  {id: 3, name: "taro", age: 20},
  {id: 4, name: "jiro", age: 25},
  {id: 5, name: "taro", age: 20},
  {id: 6, name: "jiro", age: 25}
];
