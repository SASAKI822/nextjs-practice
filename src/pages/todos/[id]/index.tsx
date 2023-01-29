import TodoList from "@/components/TodoList";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Link from "next/link";
import { idText } from "typescript";
import { ListItem } from "@mui/material";

type StatusPageProps = { status: Status };
type Status = {
  id: string;
  title: string;
};

const TodoId = () => {
  const router = useRouter();
  const routeDetail = router.query;
  const routerDetailId = router.query.id;
  console.log(router.query);
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
          query: { title: routeDetail.title },
        }}
      >
        編集
      </Link>
    </>
  );
};

export default TodoId;
