import { useState } from "react";
import { RecoilRoot } from "recoil";
import TodoCreate from "../../components/TodoCreate";

const Todos_create = () => {
  return (
    <>
      <RecoilRoot>
        <TodoCreate />
      </RecoilRoot>
    </>
  );
};

export default Todos_create;
