import React from "react";
import { todoListState } from "../atoms/states";
import { useRecoilState } from "recoil";
import Link from "next/link";
import { useRouter } from "next/router";

const TodoList = () => {
  const [todoList, setTodoList] = useRecoilState<any>(todoListState);
  const router = useRouter();

  console.log(todoList);
  return (
    <>
      <h2>TodoList</h2>
      <ul>
        {todoList.map((item: any) => (
          <Link
            href={{
              pathname: "/todos/[pid]",
              query: { pid: item.id, ptitle: item.title },
            }}
            key={item.id}
          >
            <li>{item.title}</li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
