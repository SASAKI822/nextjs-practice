import { atom } from "recoil";

export type Todo = {
  id: number;
  title: string;
};
export const todoListState = atom<Todo[]>({
  key: "todoListState",
  default: [],
});
