import { todoListState } from "@/atoms/states";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import React, { useState } from "react";
import Link from "next/link";

const edit = () => {
  const [todoList, setTodoList] = useRecoilState<any>(todoListState);
  const [editText, setEditText] = useState("");
  const router = useRouter();
  // 編集機能
  const handleEdit = () => {
    setTodoList((todoList: any) =>
      todoList.map((todoItem: any) =>
        todoItem.id === 0 ? { id: todoItem.id, title: editText } : todoItem
      )
    );
    console.log(router.query.id);
  };

  const handleEditChange = (e: any) => {
    setEditText(e.target.value);
  };

  console.log(todoList);
  return (
    <>
      {router.query.title}
      <input type="text" value={editText} onChange={handleEditChange} />
      <button onClick={handleEdit}>編集</button>
      <Link href="/todos">todoリストへ</Link>
    </>
  );
};

export default edit;
