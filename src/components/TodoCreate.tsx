import { useState } from "react";
import { todoListState } from "../globalStates/atom";
import { atom, useRecoilState, useRecoilValue } from "recoil";

export type todoType = { id: number; title: string };

const TodoCreate = () => {
  const [todoList, setTodoList] = useRecoilState<any>(todoListState);
  const [todoId, setTodoId] = useState<number>(1);
  const [todoTitle, setTodoTitle] = useState<string>("");
  const handleTodoAdd = () => {
    setTodoList([...todoList, { id: todoId, title: todoTitle }]);
    setTodoId(todoId + 1);
    setTodoTitle("");
  };

  return (
    <>
      <input
        type="text"
        onChange={(e) => setTodoTitle(e.target.value)}
        value={todoTitle}
      />
      <button onClick={handleTodoAdd}>作成</button>
    </>
  );
};

export default TodoCreate;
