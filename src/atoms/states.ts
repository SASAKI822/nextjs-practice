import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export type Todo = {
  id: string;
  title: string;
};
const todoListState = atom<Todo[]>({
  key: "todoListState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export { todoListState };
