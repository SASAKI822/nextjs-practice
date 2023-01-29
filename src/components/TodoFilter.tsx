import { todoListState } from "@/atoms/states";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

const TodoFilter = () => {
  const [todoList, setTodoList] = useRecoilState<any>(todoListState);
  const [filter, setFilter] = useState("ALL");
  const newTodos: any = [...todoList];
  useEffect(() => {
    const filteringTodos = () => {
      switch (filter) {
        case "未着手":
          setFilter(newTodos.filter((todo: any) => todo.status === "未着手"));
          break;
        default:
          setFilter(newTodos);
      }
    };
    filteringTodos();
  }, [newTodos]);

  return <div>TodoFilter</div>;
};

export default TodoFilter;
