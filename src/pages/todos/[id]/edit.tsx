import { todoListState } from "@/atoms/states";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { todoType } from "@/components/TodoCreate";
import { Button } from "@mui/material";
import { db } from "lib/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { async } from "@firebase/util";
const edit = () => {
  const [todoList, setTodoList] = useRecoilState<any>(todoListState);
  const [editTodo, setEditTodo] = useState<todoType>({ id: 0, title: "" });
  const [editText, setEditText] = useState<any>("");
  const router = useRouter();
  const routeDetail: any = router.query;
  const routeDetailId: any = router.query.id;
  const NumRouteDetailId: number = parseInt(routeDetailId);
  // 編集機能
  useEffect(() => {
    setEditTodo({ id: NumRouteDetailId, title: routeDetail.title });
  }, []);

  const handleEdit = async (id: any) => {
    const todoDocumentRef = doc(db, "todo", id);
    await updateDoc(todoDocumentRef, {
      title: editText,
    });
    console.log(todoDocumentRef);
    setTodoList((todoList: any) =>
      todoList.map((todoItem: { id: number; title: string }) =>
        todoItem.id === editTodo.id
          ? { id: todoItem.id, title: editText }
          : todoItem
      )
    );
  };

  const handleEditChange = (e: any) => {
    setEditText(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        value={editText}
        onChange={handleEditChange}
        placeholder={editTodo.title}
      />
      <Button onClick={handleEdit}>編集</Button>
      <Link href="/todos">todoリストへ</Link>
    </>
  );
};

export default edit;
