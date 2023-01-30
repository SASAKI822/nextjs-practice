import TodoList from "@/components/TodoList";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Link from "next/link";
import { idText } from "typescript";
import { ListItem } from "@mui/material";

const TodoId = () => {
  const router = useRouter();
  const routeDetail: any = router.query;
  const routerDetailId: number = routeDetail.id;

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
          pathname: `/todos/${routerDetailId}/edit`,
          query: { id: routeDetail.id, title: routeDetail.title },
        }}
      >
        編集
      </Link>
    </>
  );
};

export default TodoId;
