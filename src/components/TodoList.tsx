import React from "react";
import { todoListState } from "@/atoms/states";
import { useRecoilState } from "recoil";
import Link from "next/link";

const TodoList = () => {
  const [todoList, setTodoList] = useRecoilState<any>(todoListState);
  console.log(todoList);
  return (
    <>
      <ul>
        {todoList.map((item: any) => (
          <Link href={`/todos/${item.id}`} key={item.id}>
            <li>{item.title}</li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
