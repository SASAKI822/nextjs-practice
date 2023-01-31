import TodoList from "@/components/TodoList";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { idText } from "typescript";
import { ListItem } from "@mui/material";
import { useRecoilState } from "recoil";
import { todoListState } from "@/atoms/states";
import { todoType } from "@/components/TodoCreate";
import { db } from "lib/firebase";
import {
  collection,
  getDocs,
  query,
  where,
  doc,
  deleteDoc,
} from "firebase/firestore";

const TodoId = () => {
  const [todoList, setTodoList] = useRecoilState<any>(todoListState);
  const [deleteTodo, setDeleteTodo] = useState<todoType>({ id: 0, title: "" });

  const router = useRouter();
  const routeDetail: any = router.query;
  const routeDetailId: any = router.query.id;
  const NumRouteDetailId: number = parseInt(routeDetailId);

  // 削除
  const handleDeleteTodo = async (deleteTodo: todoType) => {
    const userCollectionRef = collection(db, "todo");
    const q = query(userCollectionRef, where("id", "==", NumRouteDetailId));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(async (document) => {
      const todoDocumentRef = doc(db, "todo", document.id);
      await deleteDoc(todoDocumentRef);
      console.log(todoDocumentRef);
    });
  };

  useEffect(() => {
    setDeleteTodo({ id: NumRouteDetailId, title: routeDetail.title });
  }, []);

  return (
    <>
      <h2>Todo詳細</h2>
      <ul>
        <li>
          <span>id:{routeDetail.id}</span>
          <span>title:{routeDetail.title}</span>
        </li>
      </ul>
      <Link href="/todos">todoリスト</Link>
      <Link
        href={{
          pathname: `/todos/${routeDetailId}/edit`,
          query: { id: routeDetail.id, title: routeDetail.title },
        }}
      >
        編集
      </Link>
      <button onClick={() => handleDeleteTodo(deleteTodo)}>削除する</button>
    </>
  );
};

export default TodoId;
