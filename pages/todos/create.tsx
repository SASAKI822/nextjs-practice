import TodoCreate from "@/components/TodoCreate";
import TodoList from "@/components/TodoList";
import React from "react";
import { RecoilRoot } from "recoil";

const Home = () => {
  return (
    <RecoilRoot>
      <TodoCreate />
      <TodoList />
    </RecoilRoot>
  );
};

export default Home;
