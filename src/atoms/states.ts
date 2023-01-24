import { atom } from "recoil";

export type Todo = {
  id: string;
  title: string;
};
export const todoListState = atom<Todo[]>({
  key: "todoListState",
  default: [],
});
