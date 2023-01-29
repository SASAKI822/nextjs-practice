import { todoListState } from "@/atoms/states";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import React, { useState } from "react";

const edit = () => {
  const [todoList, setTodoList] = useRecoilState<any>(todoListState);
  const [editText, setEditText] = useState("");
  console.log(todoList);

  // 編集機能
  const handleEdit = () => {
    setTodoList((todoList: any) =>
      todoList.map((todoItem: any) =>
        todoItem.id === router.query.id
          ? { id: todoItem.id, name: editText }
          : todoItem
      )
    );
  };

  const handleEditChange = (e: any) => {
    setEditText(e.target.value);
  };
  const router = useRouter();
  console.log(router.query.id);
  console.log(todoList);
  return (
    <>
      {router.query.title}
      <input type="text" value={editText} onChange={handleEditChange} />
      <button onClick={handleEdit}>編集</button>
    </>
  );
};

export default edit;
