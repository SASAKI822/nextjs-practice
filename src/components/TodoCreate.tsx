import { useState } from "react";
import { todoListState } from "../atoms/states";
import { atom, useRecoilState, useRecoilValue } from "recoil";
import Link from "next/link";
import { Button } from "@mui/material";

export type todoType = { id: number; title: string };

const TodoCreate = () => {
  const [todoList, setTodoList] = useRecoilState<any>(todoListState);
  const [todoId, setTodoId] = useState<number>(todoList.length);
  const [todoTitle, setTodoTitle] = useState<string>("");
  const handleTodoAdd = () => {
    setTodoList([...todoList, { id: todoId, title: todoTitle }]);
    setTodoId(todoList.length + 1);
    setTodoTitle("");
  };

  return (
    <>
      <h2>TodoCreate</h2>
      <input
        type="text"
        onChange={(e) => setTodoTitle(e.target.value)}
        value={todoTitle}
      />
      <Button onClick={handleTodoAdd}>作成</Button>

      <Link href="/todos">todoリスト</Link>
    </>
  );
};

export default TodoCreate;
