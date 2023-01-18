import React from "react";
import { RecoilRoot } from "recoil";
import TodoList from "../../components/TodoList";

const Todos = () => {
  return (
    <>
      <RecoilRoot>
        <TodoList />
      </RecoilRoot>
    </>
  );
};

export default Todos;
